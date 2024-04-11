import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { Toaster, toast } from 'sonner';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        if (result.data.message === "Success") {
          // Store user details in local storage
          const { userId, userName, userEmail, profileUrl } = result.data;
          localStorage.setItem("userId", userId);
          localStorage.setItem("userName", userName);
          localStorage.setItem("userEmail", userEmail);
          localStorage.setItem("profileUrl", profileUrl);
          
          // Show success message
          toast.success('Successfully Logged in');
          
          // Redirect to home page
          setTimeout(() => {
            localStorage.setItem("authToken", "true");
            navigate("/home");
          }, 2000);
        } else {
          // Show error message for invalid credentials
          toast.error('Invalid Email or Password');
        }
      })
      .catch((err) => {
        // Show error message for server issues
        toast.error('Server Issue');
        setError("An error occurred. Please try again later.");
        console.log(err);
      });
  };

  return (
    <>
      <Toaster richColors position="top-right" />
      <div className={styles.login_container}>
        <div className={styles.login_form_container}>
          <div className={styles.left}>
            <form className={styles.form_container} onSubmit={handleSubmit}>
              <h1>Login to Your Account</h1>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={styles.input}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={styles.input}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
              />
              {error && <div className={styles.error_msg}>{error}</div>}
              <button type="submit" className={styles.green_btn}>
                Sign In
              </button>
            </form>
          </div>
          <div className={styles.right}>
            <h1>New Here ?</h1>
            <Link to="/signup">
              <button type="button" className={styles.white_btn}>
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};



export default Login;
