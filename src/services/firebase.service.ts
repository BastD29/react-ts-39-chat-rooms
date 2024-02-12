import {
  AuthError,
  GoogleAuthProvider,
  User,
  signInWithPopup,
} from "firebase/auth";
import { auth, db } from "../config/firebase-config";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";

export type MessageType = {
  id: string;
  [key: string]: any;
};

async function loginWithGoogle(): Promise<User | null> {
  try {
    const provider = new GoogleAuthProvider();

    const result = await signInWithPopup(auth, provider);

    return result.user;
  } catch (error) {
    const typedError = error as AuthError;
    if (typedError.code !== "auth/cancelled-popup-request") {
      console.error(error);
    }
    return null;
  }
}

function getMessages(
  roomId: string,
  callback: (messages: MessageType[]) => void
) {
  return onSnapshot(
    query(
      collection(db, "chat-rooms", roomId, "messages"),
      orderBy("timestamp", "asc")
    ),
    (querySnapshot) => {
      const messages = querySnapshot.docs.map((x) => ({
        id: x.id,
        ...x.data(),
      }));

      callback(messages);
    }
  );
}

async function sendMessage(roomId: string, user: User, text: string) {
  try {
    await addDoc(collection(db, "chat-rooms", roomId, "messages"), {
      uid: user.uid,
      displayName: user.displayName,
      text: text.trim(),
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    console.error(error);
  }
}

export { loginWithGoogle, getMessages, sendMessage };
