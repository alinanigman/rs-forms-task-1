import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRef } from "react";
import styles from "./App.module.css";

const schema = yup.object({
  email: yup
    .string()
    .email("Невалидный email")
    .required("Email обязателен")
    .matches(/^[\w_-]+@[\w_-]+\.[a-zA-Z]{2,}$/, "Email не корректен"),
  password: yup
    .string()
    .min(8, "Пароль должен быть минимум 8 символов")
    .required("Пароль обязателен"),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Пароли не совпадают")
    .required("Повтор пароля обязателен"),
});

function App() {
  const submitButtonRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log("Форма отправлена", data);
  };

  if (isValid && submitButtonRef.current) {
    submitButtonRef.current.focus();
  }

  return (
    <div className={styles.App}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.error}>
          {Object.keys(errors).length > 0 &&
            Object.entries(errors).map(([field, error]) => (
              <p key={field} className={styles.errorText}>
                {error.message}
              </p>
            ))}
        </div>
        <input
          type="text"
          placeholder="Логин"
          autoComplete="email"
          {...register("email")}
        />
        <input
          type="password"
          placeholder="Пароль"
          autoComplete="new-password"
          {...register("password")}
        />
        <input
          type="password"
          placeholder="Повторите пароль"
          autoComplete="new-password"
          {...register("repeatPassword")}
        />
        <button ref={submitButtonRef} type="submit" disabled={!!errors.length}>
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}

export default App;
