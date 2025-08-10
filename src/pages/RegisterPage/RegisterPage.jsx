import styles from "./RegisterPage.module.css";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

function RegisterPage() {
  return (
    <div className={styles.registerPage}>
      <div className={styles.registerContent}>
        <h1 className={styles.title}>Create a new account</h1>
        <p className={styles.subtitle}>
          Access your dashboard, orders, and more.
        </p>
        <RegisterForm />
      </div>
    </div>
  );
}

export default RegisterPage;
