import { Link, Navigate, useParams } from "react-router-dom";

import { chatRooms } from "../../data/chatRooms";

import MessageList from "../MessageList/MessageList";
import MessageInput from "../MessageInput/MessageInput";

import styles from "./ChatRoom.module.css";

function ChatRoom() {
  const params = useParams();

  const room = chatRooms.find((chatRoom) => chatRoom.id === params.id);

  if (!room) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <h2>{room?.title}</h2>
      <div>
        <Link to="/">⬅️ Back to all rooms</Link>
      </div>
      <div className={styles.messagesContainer}>
        <MessageList roomId={room.id} />
        <MessageInput roomId={room.id} />
      </div>
    </>
  );
}

export default ChatRoom;
