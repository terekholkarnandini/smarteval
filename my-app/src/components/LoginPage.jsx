import { useState } from "react" //ohhh dista kay
import "./LoginPage.css"; //oh ha distay ithe sagla p

export default function LoginPage() {
  const [role, setRole] = useState("student");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`Logging in as ${role}...`);
    // send API request to backend
  };

  return (
    
    <div className="login-container">
      <div className="login-card">
        <h1 className="title">SmartEval Login</h1>

        {/* Role Switch */}
        <div className="role-switch">
          <button
            className={role === "student" ? "active" : ""}
            onClick={() => setRole("student")}
          >
            Student
          </button>
          <button
            className={role === "faculty" ? "active" : ""}
            onClick={() => setRole("faculty")}
          >
            Faculty
          </button>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="login-btn">
            Login as {role}
          </button>
        </form>

        <p className="signup-text">
          Don’t have an account? <a href="#">Sign up</a>
        </p>
      </div>
    </div>
 
  );
}
