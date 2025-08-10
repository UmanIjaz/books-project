import styles from "./RegisterForm.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { supabase } from "../../supabase/supabaseClient";
import { toast } from "../Toast/toast";
import { useState } from "react";
import SpinnerMini from "../SpinnerMini/SpinnerMini";
import { useAuth } from "../../contexts/AuthContext";

function RegisterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "Uman",
      email: "umanijaz5@gmail.com",
      password: "Uman@123",
    },
  });

  const navigate = useNavigate();
  const { register: registerUser } = useAuth();

  const onRegister = async (formData) => {
    setIsSubmitting(true);
    const { success, error, message } = await registerUser(formData);

    if (!success) {
      toast(error || "Signup failed", "error");
    } else {
      toast(message, "success");
      navigate("/login");
    }

    setIsSubmitting(false);
  };

  return (
    <form
      className={styles.registerForm}
      autoComplete="off"
      onSubmit={handleSubmit(onRegister)}
    >
      {/* Name */}
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <input
          type="text"
          id="name"
          className={styles.input}
          placeholder="Enter your name"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters",
            },
            pattern: {
              value: /^[A-Za-z\s]+$/,
              message: "Only letters and spaces allowed",
            },
          })}
          disabled={isSubmitting}
        />
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          type="email"
          id="email"
          className={styles.input}
          placeholder="Enter your email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Invalid email format",
            },
          })}
          disabled={isSubmitting}
        />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      </div>

      {/* Password */}
      <div className={styles.formGroup}>
        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <input
          type="password"
          id="password"
          className={styles.input}
          placeholder="Enter your password"
          autoComplete="current-password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
            pattern: {
              value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)/,
              message:
                "Password must contain uppercase, lowercase, and a number",
            },
          })}
          disabled={isSubmitting}
        />
        {errors.password && (
          <p className={styles.error}>{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={styles.registerBtn}
      >
        {isSubmitting ? <SpinnerMini /> : "Sign Up"}
      </button>

      <div className={styles.links}>
        <Link to="/login" className={styles.link}>
          Login
        </Link>
      </div>

      {errors.root && <p className={styles.error}>{errors.root.message}</p>}
    </form>
  );
}

export default RegisterForm;
