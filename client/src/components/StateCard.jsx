const StatCard = ({ title, value, changeText, children }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 space-y-4 flex-1 transition duration-200 hover:shadow-lg">
      <div>
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <p className="text-3xl font-bold text-[#3e8e41]">{value}</p>
        <p className="text-xs text-gray-400">{changeText}</p>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default StatCard;