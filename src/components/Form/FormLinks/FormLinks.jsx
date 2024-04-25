import { ROUTE } from "../../../utils/constants";
import styles from "./FormLinks.module.css";
import { Link } from "react-router-dom";

export const LoginLinks = () => {
  return (
    <main className={styles.links}>
      <div className={styles.linkContent}>
        <span className="text text_type_main-default text_color_inactive mr-2">
          Вы - новый пользователь?
        </span>
        <Link className={styles.link} to={`/${ROUTE.mainLayout.register}`}>
          Зарегистрироваться
        </Link>
      </div>
      <div className={styles.linkContent}>
        <span className="text text_type_main-default text_color_inactive mr-2">
          Забыли пароль?
        </span>
        <Link className={styles.link} to={`/${ROUTE.mainLayout.forgotPass}`}>
          Восстановить пароль
        </Link>
      </div>
    </main>
  );
};

export const RegisterLinks = () => {
  return (
    <main className={styles.links}>
      <div className={styles.linkContent}>
        <span className="text text_type_main-default text_color_inactive mr-2">
          Уже зарегистрированы?
        </span>
        <Link className={styles.link} to={`/${ROUTE.mainLayout.login}`}>
          Войти
        </Link>
      </div>
    </main>
  );
};

export const ForgotLinks = () => {
  return (
    <main className={styles.links}>
      <div className={styles.linkContent}>
        <span className="text text_type_main-default text_color_inactive mr-2">
          Вспомнили пароль?
        </span>
        <Link className={styles.link} to={`/${ROUTE.mainLayout.login}`}>
          Войти
        </Link>
      </div>
    </main>
  );
};
