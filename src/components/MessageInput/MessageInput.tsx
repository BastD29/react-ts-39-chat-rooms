import { ChangeEvent, FormEvent, useState } from "react";

import { useAuth } from "../../hooks/useAuth";

import { sendMessage } from "../../services/firebase.service";

import style from "./MessageInput.module.css";

export type MessageInputProps = {
  roomId: string;
};

function MessageInput({ roomId }: MessageInputProps) {
  const { user } = useAuth();
  const [value, setValue] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (user) {
      sendMessage(roomId, user, value);
    } else {
      console.error("User is not authenticated");
    }

    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className={style.messageInputContainer}>
      <input
        type="text"
        placeholder="Enter a message"
        value={value}
        onChange={handleChange}
        className={style.messageInput}
        required
        minLength={1}
      />
      <button
        type="submit"
        disabled={value.trim().length === 0}
        className={style.sendMessage}
      >
        Send
      </button>
    </form>
  );
}

export default MessageInput;
