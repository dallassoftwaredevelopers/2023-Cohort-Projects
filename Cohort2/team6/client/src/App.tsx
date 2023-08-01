import "./App.css";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { Home } from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import CreateEvent from "./pages/CreateEvent/CreateEvent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-event" element={<CreateEvent />} />
      </Route>
    </Routes>
  );
}

export default App;
