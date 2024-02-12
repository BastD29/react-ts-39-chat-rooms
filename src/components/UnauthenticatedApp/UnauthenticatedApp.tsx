import { useAuth } from "../../hooks/useAuth";

import styles from "./UnauthenticatedApp.module.css";

function UnauthenticatedApp() {
  const { login } = useAuth();

  return (
    <>
      <h2>Log in to join a chat room!</h2>
      <div>
        <button onClick={login} className={styles.login}>
          Login with Google
        </button>
      </div>
    </>
  );
}

export default UnauthenticatedApp;
