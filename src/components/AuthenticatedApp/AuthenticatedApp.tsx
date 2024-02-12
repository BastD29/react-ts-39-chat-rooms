import { Route, Routes } from "react-router-dom";
import { Landing } from "../Landing/Landing";
import ChatRoom from "../ChatRoom/ChatRoom";

export default function AuthenticatedApp() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/room/:id" element={<ChatRoom />} />
    </Routes>
  );
}
