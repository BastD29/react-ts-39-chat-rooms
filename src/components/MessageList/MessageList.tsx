import { useRef } from "react";

import { useMessages } from "../../hooks/useMessages";

import { useAuth } from "../../hooks/useAuth";

import Message from "../Message/Message";

import styles from "./MessageList.module.css";

export type MessageListProps = {
  roomId: string;
};

function MessageList({ roomId }: MessageListProps) {
  const containerRef = useRef(null);
  const messages = useMessages(roomId);
  const { user } = useAuth();

  return (
    <div className={styles.messageListContainer} ref={containerRef}>
      <ul className={styles.messageList}>
        {messages.map((message) => (
          <Message
            key={message.id}
            message={message}
            isOwnMessage={message.uid === user?.uid}
          />
        ))}
      </ul>
    </div>
  );
}

export default MessageList;
