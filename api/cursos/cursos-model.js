'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cursoSchema = mongoose.Schema({

    titulo: String,

    descricao: String,

    duracao: Number,

    imagem: String,

    linkURL: String,

    aulas: [{
      titulo: String,
      descricao: String,
      duracao: Number,
      videoUrl: String
    }],

    tags: [{
      type: String
    }],

    dataCriacao: {
      type: Date,
      default: Date.now
    }

},
{
  timestamps: true,
  createdAt: true,
  updatedAt: true
});

module.exports = mongoose.model('Curso', cursoSchema);