import styles from "./LoginPage.module.css";
import { LoginForm } from "../../components";

function LoginPage() {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContent}>
        <h1 className={styles.title}>Sign in to your account</h1>
        <p className={styles.subtitle}>
          Access your dashboard, orders, and more.
        </p>
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
