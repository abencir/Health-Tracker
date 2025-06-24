const GoalProgress = ({ title, goal, actual, progress }) => (
  <div className="mb-8 bg-white p-4 rounded-xl shadow-md">
    <h3 className="text-xl font-semibold text-[#3e8e41] mb-1">{title}</h3>
    <p className="text-sm text-gray-600">Goal: {goal}</p>

    <div className="flex items-center gap-3 mt-3">
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="h-3 bg-[#3e8e41] rounded-full transition-all duration-700 ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <span className="text-sm font-semibold text-gray-700">{progress}%</span>
    </div>

    <p className="text-sm text-gray-500 mt-2"> Actual: {actual}</p>
  </div>
);

export default GoalProgress;
