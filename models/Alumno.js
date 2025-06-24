const mongoose = require("mongoose");

const AlumnoSchema = new mongoose.Schema({
        nombre: String,
        edad: Number,
        mail: String,
        telenofos: [String],
        alumnoRegular: Boolean,
        clases: [ {type: mongoose.Schema.Types.ObjectId, ref: "Clase"} ]
});

module.exports = mongoose.model("Alumno", AlumnoSchema);
