import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import HealthLog from "./pages/HealthLog.jsx";
import WeeklyGoals from "./pages/WeeklyGoals.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/log" element={<HealthLog />} />
        <Route path="/goals" element={<WeeklyGoals />} />
      </Routes>
    </Router>
  );
}

export default App;