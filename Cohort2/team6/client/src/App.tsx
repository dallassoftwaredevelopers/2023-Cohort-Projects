import "./App.css";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { Home } from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import EventsAttending from "./pages/EventsAttending/EventsAttending";
import CreateEvent from "./pages/CreateEvent/CreateEvent";
import ViewEvent from "./pages/ViewEvent/ViewEvent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/events-attending" element={<EventsAttending />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/event" element={<ViewEvent />} />
      </Route>
    </Routes>
  );
}

export default App;
