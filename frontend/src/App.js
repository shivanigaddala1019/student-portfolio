import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState({});
  const [selectedId, setSelectedId] = useState(1);
  const [editMode, setEditMode] = useState(false);

  // LOAD DATA
  useEffect(() => {
    fetch("http://localhost:5001/students")
      .then(res => res.json())
      .then(data => {
        setStudents(data);
        setStudent(data[0]);
      });
  }, []);

  // SELECT STUDENT
  const handleSelect = (id) => {
    const selected = students.find(s => s.id === parseInt(id));
    setSelectedId(id);
    setStudent(selected);
    setEditMode(false);
  };

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  // SAVE DATA ✅
  const saveData = () => {
    fetch(`http://localhost:5001/students/${student.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student)
    })
      .then(res => res.json())
      .then(() => {
        // Reload data
        fetch("http://localhost:5001/students")
          .then(res => res.json())
          .then(data => {
            setStudents(data);
            const updated = data.find(s => s.id === student.id);
            setStudent(updated);
            setEditMode(false);
          });
      });
  };

  return (
    <div className="container">
      <h1 className="title">Your Professional Profile</h1>

      {/* DROPDOWN */}
      <select
        className="dropdown"
        value={selectedId}
        onChange={(e) => handleSelect(e.target.value)}
      >
        {students.map(s => (
          <option key={s.id} value={s.id}>{s.name}</option>
        ))}
      </select>

      {/* CARD */}
      <div className="card">
        <div className="header"></div>

        <div className="avatar-container">
          <div className="avatar">
            {student.name?.split(" ").map(n => n[0]).join("")}
          </div>
        </div>

        <div className="content">

          {editMode ? (
            <>
              <input name="name" value={student.name || ""} onChange={handleChange} />
              <input name="email" value={student.email || ""} onChange={handleChange} />
              <input name="phone" value={student.phone || ""} onChange={handleChange} />
              <input name="course" value={student.course || ""} onChange={handleChange} />
              <input name="goal" value={student.goal || ""} onChange={handleChange} />

              <button className="button" onClick={saveData}>Save</button>
            </>
          ) : (
            <>
              <h2>{student.name}</h2>
              <p>{student.email} | {student.phone}</p>

              <h4>Skills</h4>
              {student.skills?.map((s, i) => (
                <span key={i} className="skill">{s}</span>
              ))}

              <h4>Career Goal</h4>
              <p>{student.goal}</p>

              <button className="button" onClick={() => setEditMode(true)}>
                Edit
              </button>
            </>
          )}

        </div>
      </div>
    </div>
  );
}

export default App;