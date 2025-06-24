
require("dotenv").config();
const mongoose = require("mongoose");

// Conexión.
mongoose.connect(process.env.MONGO_URI)
	.then(()=> console.log("Conectado :)"))
	.catch((err=> console.error("Error al conectar :c"), err));

// Esquemas.
const Profesor = mongoose.model("Profesor", new mongoose.Schema({
	nombre: String,
	edad: Number,
	mail: String,
	telefonos: [String],
	clases: [ type: mongoose.Schema.Type.ObjectId, ref: "Clase"]
}));

const Clase = mongoose.model("Clase", new mongoose.Schema({
	nombre: String,
	creditos: Number,
	syllabus: Buffer,
	encargado: type: mongoose.Schema.Type.ObjectId, ref: "Profesor"
}));

const Alumno = mongoose.model("Alumno", new mongoose.Schema({
	nombre: String,
	edad: NUmber,
	mail: String,
	telenofos: [String],
	alumnoRegular: Boolean,
	clases: [ type: mongoose.Schema.Type.ObjectId, ref: "Clase" ]
}));


