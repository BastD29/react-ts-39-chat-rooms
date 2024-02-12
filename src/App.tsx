import AuthenticatedApp from "./components/AuthenticatedApp/AuthenticatedApp";
import UnauthenticatedApp from "./components/UnauthenticatedApp/UnauthenticatedApp";

import { useAuth } from "./hooks/useAuth";

function App() {
  const { user } = useAuth();

  return (
    <div className="container">
      <h1>💬 Chat Room</h1>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
