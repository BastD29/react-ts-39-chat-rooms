import { MessageType } from "../../services/firebase.service";

import styles from "./Message.module.css";

export type MessageProps = {
  message: MessageType;
  isOwnMessage: boolean;
};

function Message({ message, isOwnMessage }: MessageProps) {
  const { displayName, text } = message;

  return (
    // <li className={['message', isOwnMessage && 'own-message'].join(' ')}>
    <li
      className={[
        `${styles.message}`,
        isOwnMessage && `${styles.ownMessage}`,
      ].join(" ")}
    >
      {/* <h4 className="sender">{isOwnMessage ? 'You' : displayName}</h4> */}
      <h4 className={styles.sender}>{isOwnMessage ? "You" : displayName}</h4>
      <div>{text}</div>
    </li>
  );
}

export default Message;
