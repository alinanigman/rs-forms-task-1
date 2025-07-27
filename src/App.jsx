import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const onEmailChange = ({ target }) => {
    setEmail(target.value);
    let error = null;
    const emailRegex = /^[\w_-]+@[\w_-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(target.value)) {
      error = "Email не корректен";
    }
    setError(error);
  };

  return (
    <div className={styles.App}>
      <form className={styles.form}>
        <div className={styles.error}>
          {!!error && <p className={styles.errorText}>{error}</p>}
        </div>
        <input
          type="text"
          name="email"
          value={email}
          placeholder="Логин"
          onChange={onEmailChange}
        />
        <button>Зарегистрироваться</button>
      </form>
    </div>
  );
}

export default App;
