import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const onEmailChange = ({ target }) => {
    setEmail(target.value);
    let errorText = null;
    const emailRegex = /^[\w_-]+@[\w_-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(target.value)) {
      errorText = "Email не корректен";
    }
    setError(errorText);
  };

  const onPasswordChange = ({ target }) => {
    const value = target.value;
    setPassword(value);
    let errorText = null;
    if (value.length < 8) {
      errorText = "Пароль должен быть не короче 8 символов";
    }
    setError(errorText);
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
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Пароль"
          onChange={onPasswordChange}
        />
        <button>Зарегистрироваться</button>
      </form>
    </div>
  );
}

export default App;
