import { useState, useEffect, useRef } from "react";
import "./LoginPage.css";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";

export default function LoginPage() {
  const [role, setRole] = useState("student");
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current) {
      vantaEffect.current = FOG({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0x1f3b73,    // Rich dark blue highlight (#1f3b73)
        midtoneColor: 0x215caa,      // Strong navy blue (#215caa)
        lowlightColor: 0x184a8c,     // Deep cobalt blue (#184a8c)
        baseColor: 0x2364aa, 
        blurfactor : 0.78,
        speed : 5
      });
    }
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`Logging in as ${role}...`);
    // send API request to backend
  };

  return (
    <>
      <div id="vanta" ref={vantaRef}></div>
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
    </>
  );
}
