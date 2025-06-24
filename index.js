require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Alumno = require("./models/Alumno");
const Profesor = require("./models/Profesor");
const Clase = require("./models/Clase");

const app = express();
app.use(express.json());

// Conexión.
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Conectado :)"))
  .catch((err) => console.error("Error al conectase :C :", err));

// POSTs
app.post("/alumnos", async (req, res) => {
  try {
    const alumno = new Alumno(req.body);
    await alumno.save();
    res.status(201).json(alumno);
  } catch (err) {
    console.error(" Error al guardar alumno:", err);
    res.status(500).json({ error: "Error al guardar alumno" });
  }
});

app.post("/profesores", async (req, res) => {
  try {
    const profesores = new Profesor(req.body);
    await profesores.save();
    res.status(201).json(profesores);
  } catch (err) {
    console.error(" Error al guardar profesor:", err);
    res.status(500).json({ error: "Error al guardar profesor" });
  }
});

app.post("/clases", async (req, res) => {
  try {
    const clases = new Clase(req.body);
    await clases.save();
    res.status(201).json(clases);
  } catch (err) {
    console.error("Error al guardar curso:", err);
    res.status(500).json({ error: "Error al guardar curso" });
  }
});

// GETs
app.get("/alumnos", async (req, res) => {
  const alumnos = await Alumno.find();
  res.json(alumnos);
});

app.get("/profesores", async (req, res) => {
  const profesores = await Profesor.find();
  res.json(profesores);
});

app.get("/clases", async (req, res) => {
  const clases = await Clase.find();
  res.json(clases);
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
