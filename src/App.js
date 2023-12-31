import { useContext } from "react";
import "./App.css";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Context } from "./context/Context";

function App() {
  const {user} = useContext(Context);
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/posts" element={<Home/>} />
        <Route path="/register" element={user? <Home/>:<Register/>} />
        <Route path="/login" element={user? <Home/> : <Login/>} />
        <Route path="/post/:id" element={<Single/>} />
        <Route path="/write" element={user? <Write/>: <Register/>} />
        <Route path="/settings" element={user? <Settings/> : <Register/>} />
      </Routes>
    </Router>
  );
}

export default App;
