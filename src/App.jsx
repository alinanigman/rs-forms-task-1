import { useState, useRef } from "react";
import styles from "./App.module.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState(null);

  const submitButtonRef = useRef(null);

  const validateEmail = (emailValue) => {
    const emailRegex = /^[\w_-]+@[\w_-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(emailValue);
  };

  const validatePassword = (passwordValue) => {
    return passwordValue.length >= 8;
  };

  const validateRepeatPassword = (repeatPasswordValue) => {
    return repeatPasswordValue === password;
  };

  const onEmailChange = ({ target }) => {
    const value = target.value;
    setEmail(value);
    let errorText = null;
    if (!validateEmail(value)) {
      errorText = "Email не корректен";
    }
    setError(errorText);
  };

  const onPasswordChange = ({ target }) => {
    const value = target.value;
    setPassword(value);
    let errorText = null;
    if (!validatePassword(value)) {
      errorText = "Пароль должен быть не короче 8 символов";
    }
    setError(errorText);
  };

  const onRepeatPasswordChange = ({ target }) => {
    const value = target.value;
    setRepeatPassword(value);
    let error = null;
    if (!validateRepeatPassword(value)) {
      error = "Пароли не совпадают";
    }
    setError(error);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Форма отправлена", { email, password, repeatPassword });
  };

  return (
    <div className={styles.App}>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.error}>
          {!!error && <p className={styles.errorText}>{error}</p>}
        </div>
        <input
          type="text"
          name="email"
          value={email}
          placeholder="Логин"
          autoComplete="email"
          onChange={onEmailChange}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Пароль"
          autoComplete="new-password"
          onChange={onPasswordChange}
        />
        <input
          type="password"
          name="repeatPassword"
          value={repeatPassword}
          placeholder="Повторите пароль"
          autoComplete="new-password"
          onChange={onRepeatPasswordChange}
        />
        <button ref={submitButtonRef} type="submit" disabled={!!error}>
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}

export default App;
