import { LucideMoon, LucideDumbbell, LucideUtensils } from "lucide-react";

const suggestions = [
  {
    icon: <LucideMoon className="text-[#3e8e41]" size={24} />,
    title: "Prioritize Sleep",
    text: "Aim for at least 7 hours of sleep each night to improve your well-being.",
  },
  {
    icon: <LucideDumbbell className="text-[#3e8e41]" size={24} />,
    title: "Mix Up Your Workouts",
    text: "Incorporate cardio and strength exercises to maximize your fitness.",
  },
  {
    icon: <LucideUtensils className="text-[#3e8e41]" size={24} />,
    title: "Eat Balanced Meals",
    text: "Focus on whole, unprocessed foods to fuel your body.",
  },
];

const Suggestions = () => {
  return (
    <div className="space-y-6 p-6 bg-white rounded-xl shadow-md">
      <h3 className="text-2xl font-bold text-[#3e8e41] text-center mb-4">
        Smart Suggestions from FitTracker
      </h3>
      {suggestions.map((item, index) => (
        <div key={index} className="flex items-start space-x-4">
          <div className="flex-shrink-0">{item.icon}</div>
          <div>
            <p className="text-lg font-semibold text-gray-800">{item.title}</p>
            <p className="text-sm text-gray-600">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;