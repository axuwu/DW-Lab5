const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const disciplinaSchema = new Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    professor: {
      type: String,
      required: true,
    },
    ano: {
      type: String,
      required: true,
    },
    curso: {
      type: String,
      required: true,
    },
    descricao: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Disciplina = mongoose.model("Disciplina", disciplinaSchema);
module.exports = Disciplina;
