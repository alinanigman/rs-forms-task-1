import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [email] = useState("");

  return (
    <div className={styles.App}>
      <form className={styles.form}>
        <input type="text" name="email" value={email} placeholder="Логин" />
        <button>Зарегистрироваться</button>
      </form>
    </div>
  );
}

export default App;
