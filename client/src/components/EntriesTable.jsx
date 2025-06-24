import React from "react";
import axios from "axios";

const EntriesTable = ({ entries, onDelete, onEdit }) => {
  const handleDelete = async (id) => {
    try {
      await axios.delete( `http://localhost:5000/api/entries/${id}`);
      onDelete(); 
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  return (
    <div className="mt-12 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-[#3e8e41] mb-6 text-center">
        Today's Entries
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-[#3e8e41] text-white">
            <tr>
              <th className="p-4">Sleep</th>
              <th className="p-4">Meals</th>
              <th className="p-4">Workout</th>
              <th className="p-4">Duration</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="text-gray-700">
            {entries.map((entry) => (
              <tr
                key={entry._id}
                className="border-b hover:bg-gray-50 transition-colors"
              >
                <td className="p-4">{entry.sleep}</td>
                <td className="p-4">{entry.meals}</td>
                <td className="p-4">{entry.workout}</td>
                <td className="p-4">{entry.duration}</td>
                <td className="p-4 text-center text-sm font-semibold space-x-4">
                  <button
                    onClick={() => onEdit(entry)}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(entry._id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EntriesTable;