import { useEffect, useState } from "react";
import { MessageType, getMessages } from "../services/firebase.service";

function useMessages(roomId: string) {
  const [messages, setMessages] = useState<MessageType[]>([]);

  useEffect(() => {
    const unsubscribe = getMessages(roomId, setMessages);

    return unsubscribe;
  }, [roomId]);

  return messages;
}

export { useMessages };
