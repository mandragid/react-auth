import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Discovery from "./Pages/Discovery";
import ProtectedRoute from "./hoc/ProtectedRoute";
import ProtectedRoutes from "./hoc/ProtectedRoutes";
import AddNewCar from "./Pages/AddNewCar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/discovery" element={<Discovery />} />
          <Route path="/add-new-car" element={<AddNewCar />} />
        </Route>
        {/* <Route
          path="/discovery"
          element={
            <ProtectedRoutes>
              <Discovery />
            </ProtectedRoutes>
          }
        ></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
