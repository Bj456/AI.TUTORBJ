import { Outlet } from "react-router-dom";
import "./rootLayout.css";

const RootLayout = () => {
  return (
    <div className="rootLayout">
      <header>
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>AI TUTOR</span>
        </a>
        <div className="user">
          {/* Login/Signup UI can go here */}
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
