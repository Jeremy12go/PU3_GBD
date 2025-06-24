const mongoose = require("mongoose");

const ProfesorSchema = new mongoose.Schema({
        nombre: String,
        edad: Number,
        mail: String,
        telefonos: [String],
        clases: [ {type: mongoose.Schema.Types.ObjectId, ref: "Clase"} ]
});

module.exports = mongoose.model("ProfesorSchema", ProfesorSchema);
