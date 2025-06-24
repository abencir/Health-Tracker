import React, { useState, useEffect } from "react";
import Navbar from "../components/NavBar.jsx";
import HealthLogForm from "../components/HealthLogForm.jsx";
import EntriesTable from "../components/EntriesTable.jsx";
import axios from "axios";

const HealthLog = () => {
  const [entries, setEntries] = useState([]);
  const [entryToEdit, setEntryToEdit] = useState(null);

  const fetchEntries = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/entries");
      setEntries(res.data);
    } catch (err) {
      console.error("Failed to fetch entries:", err);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="max-w-5xl mx-auto p-6 space-y-12">
        <h1 className="text-3xl font-extrabold text-[#3e8e41] text-center">
          Daily Health Log
        </h1>

        <HealthLogForm
          onAdd={fetchEntries}
          entryToEdit={entryToEdit}
          clearEdit={() => setEntryToEdit(null)}
        />
        <EntriesTable
          entries={entries}
          onDelete={fetchEntries}
          onEdit={setEntryToEdit}
        />
      </div>
    </div>
  );
};

export default HealthLog;