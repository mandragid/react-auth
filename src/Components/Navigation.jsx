import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div>
      <ul>
        <li>
          {isLogin ? (
            <div>
              <button onClick={handleLogout}>logout</button> <br />
              <a href="/register">Register</a> <br />
              <a href="/discovery">Discovery</a>
            </div>
          ) : (
            <div>
              <a href="/login">Login</a> <br />
              <a href="/register">Register</a> <br />
              <a href="/discovery">Discovery</a>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
