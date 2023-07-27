import "./App.css";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { Home } from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;
