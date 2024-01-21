import LoginForm from "@/pages/loginForm/loginForm";
import styles from "./login.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form>
          <button className={styles.github}>Login</button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
