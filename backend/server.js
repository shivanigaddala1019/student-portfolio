const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let students = [
  { id: 1, name: "Aisha Bello", email: "aisha@example.com", phone: "+234 803 555 0199", course: "Backend Developer", skills: ["Java","Spring Boot"], goal: "Fintech backend leader" },
  { id: 2, name: "Liam O'Connor", email: "liam@example.com", phone: "+353 86 123 4567", course: "Cloud Engineer", skills: ["AWS","Docker"], goal: "Cloud architect" },
  { id: 3, name: "Priya Sharma", email: "priya@example.com", phone: "+91 9876543210", course: "Frontend Developer", skills: ["React","CSS"], goal: "Modern UI dev" },

  { id: 4, name: "Alex Johnson", email: "alex@example.com", phone: "+1 555 234 5678", course: "Full Stack", skills: ["Node","React"], goal: "Build apps" },
  { id: 5, name: "Sofia Garcia", email: "sofia@example.com", phone: "+34 612 345 678", course: "UI Designer", skills: ["Figma"], goal: "UX expert" },
  { id: 6, name: "Kenji Tanaka", email: "kenji@example.com", phone: "+81 90 1234 5678", course: "AI Engineer", skills: ["Python"], goal: "AI systems" },
  { id: 7, name: "Emma Brown", email: "emma@example.com", phone: "+44 7700 900123", course: "Data Analyst", skills: ["SQL"], goal: "Data insights" },
  { id: 8, name: "Rahul Verma", email: "rahul@example.com", phone: "+91 9123456789", course: "Cybersecurity", skills: ["Security"], goal: "Protect systems" },
  { id: 9, name: "Fatima Khan", email: "fatima@example.com", phone: "+92 300 1234567", course: "Mobile Dev", skills: ["Flutter"], goal: "Apps dev" },
  { id: 10, name: "David Lee", email: "david@example.com", phone: "+65 8123 4567", course: "DevOps", skills: ["CI/CD"], goal: "Automation" },
  { id: 11, name: "Maria Rossi", email: "maria@example.com", phone: "+39 320 123 4567", course: "Frontend", skills: ["Vue"], goal: "UI apps" },
  { id: 12, name: "Carlos Mendes", email: "carlos@example.com", phone: "+55 21 91234 5678", course: "Game Dev", skills: ["Unity"], goal: "Games" },
  { id: 13, name: "Ananya Gupta", email: "ananya@example.com", phone: "+91 9988776655", course: "Software Eng", skills: ["Java"], goal: "Systems" },

  { id: 14, name: "Nikhil Reddy", email: "nikhil@example.com", phone: "+91 9012345678", course: "Backend", skills: ["Node"], goal: "APIs" },
  { id: 15, name: "Olivia Wilson", email: "olivia@example.com", phone: "+1 202 555 0189", course: "Designer", skills: ["Photoshop"], goal: "Creative UI" },
  { id: 16, name: "Arjun Mehta", email: "arjun@example.com", phone: "+91 9876501234", course: "Full Stack", skills: ["SQL"], goal: "Apps" },
  { id: 17, name: "Chen Wei", email: "chen@example.com", phone: "+86 13800138000", course: "AI", skills: ["ML"], goal: "AI apps" },
  { id: 18, name: "Isabella Martinez", email: "isa@example.com", phone: "+34 678 123 456", course: "Frontend", skills: ["HTML"], goal: "Web UI" },
  { id: 19, name: "Karan Singh", email: "karan@example.com", phone: "+91 9988001122", course: "Security", skills: ["Hacking"], goal: "Secure" },
  { id: 20, name: "Lucas Silva", email: "lucas@example.com", phone: "+55 11987654321", course: "Mobile", skills: ["Firebase"], goal: "Apps" },
  { id: 21, name: "Sara Ahmed", email: "sara@example.com", phone: "+20 1001234567", course: "Data Science", skills: ["Pandas"], goal: "ML" },
  { id: 22, name: "Daniel Kim", email: "daniel@example.com", phone: "+82 10-1234-5678", course: "DevOps", skills: ["Docker"], goal: "Deploy" },
  { id: 23, name: "Meera Nair", email: "meera@example.com", phone: "+91 9090909090", course: "Software", skills: ["Spring"], goal: "Enterprise" }
];

// GET all students
app.get("/students", (req, res) => {
  res.json(students);
});

// UPDATE student
app.put("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);

  students = students.map(s =>
    s.id === id ? { ...req.body, id } : s
  );

  res.json({ message: "Student updated successfully" });
});

// START SERVER
app.listen(5001, () => {
  console.log("✅ Server running on http://localhost:5001");
});