import Navbar from "../components/NavBar.jsx";
import GoalProgress from "../components/GoalProgress.jsx";

const WeeklyGoals = () => (
  <div className="bg-gray-50 min-h-screen">
    <Navbar />
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-[#3e8e41]">Weekly Goals</h1>
        <p className="text-gray-600 mt-2">
          Set your wellness goals and track your progress throughout the week.
        </p>
      </div>

      <GoalProgress
        title="Sleep"
        goal="8 hours per night"
        actual="6 hours per night"
        progress={75}
      />
      <GoalProgress
        title="Exercise"
        goal="5 workouts this week"
        actual="2 workouts this week"
        progress={50}
      />
      <GoalProgress
        title="Meals"
        goal="21 healthy meals this week"
        actual="21 healthy meals this week"
        progress={100}
      />
    </div>
  </div>
);

export default WeeklyGoals;