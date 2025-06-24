import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white border-b shadow-sm">
      <h1 className="text-2xl font-bold text-[#3e8e41]">FitTracker</h1>
      <div className="flex items-center gap-6 text-gray-600 text-sm font-medium">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/log">Log</Link>
        <Link to="/goals">Goals</Link>
        <Link
          to="/"
          className="px-4 py-2 bg-[#3e8e41] text-white rounded-lg hover:bg-[#2f7034]"
        >
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;