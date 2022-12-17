import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = (props) => {
  const [login, setLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    if (!token) {
      setLogin(false);
      setIsLoading(false);
    } else {
      setLogin(true);
      setIsLoading(false);
    }
  }, [login]);

  if (isLoading) {
    return "checking auth...";
  }

  if (!login) return <Navigate to="/login" />;
  return props.children;
};

export default ProtectedRoutes;
