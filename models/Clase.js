const mongoose = require("mongoose");

const ClaseSchema = new mongoose.Schema({
        nombre: String,
        creditos: Number,
        syllabus: Buffer,
        encargado: {type: mongoose.Schema.Types.ObjectId, ref: "Profesor"}
});

module.exports = mongoose.model("Clase", ClaseSchema);
