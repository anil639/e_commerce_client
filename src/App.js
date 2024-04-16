import "./App.css";
import { Routes, Route } from "react-router-dom";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { Button } from "antd";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
