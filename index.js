require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// Conexión.
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Conectado :)"))
  .catch((err) => console.error("Error al conectase :C :", err));


// GETs
app.get("/alumnos", async (req, res) => {
  try{ 
    const alumnos = await mongoose.connection.db.collection("alumnos").find().toArray();
    res.json(alumnos);
  } catch (error){
    console.log("error en alumnos: ",error)
  }
});

app.get("/profesores", async (req, res) => {
  try{ 
    const profesores = await mongoose.connection.db.collection("profesores").find().toArray();
    res.json(profesores);
  } catch (error){
    console.log("error en alumnos: ",error)
  }
});

app.get("/clases", async (req, res) => {
  try{ 
    const clases = await mongoose.connection.db.collection("clases").find().toArray();
    res.json(clases);
  } catch (error){
    console.log("error en alumnos: ",error)
  }
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
