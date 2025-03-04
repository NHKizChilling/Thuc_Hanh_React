import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
//import TodoApp from './components/bt1/TodoApp.jsx'
import Student from "./components/bt2/Student";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./thuc_hanh_router/pages/Home.jsx";
import UserDetail from "./thuc_hanh_router/components/UserDetails.jsx";
import NotFound from "./thuc_hanh_router/pages/NotFound.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
