const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const DataSchema = mongoose.Schema({
    nome: String,
    cpf: String,
    email: String,
    telefone: String,
    endereco: String,
    senha: Number
}, {
    timestamps: true
})

DataSchema.pre('save', function(next){ 
    if(this.isModified('senha')){
        return next()
    }
    this.senha = bcrypt.hashSync(this.senha, 10)
})

const usuario = mongoose.model('usuario', DataSchema)
module.exports = usuario; 