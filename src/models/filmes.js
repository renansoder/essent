const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
    titulo: String,
    elenco: Array,
    data_lanc: String,
    status: Boolean
    
}, {
    timestamps: true
})

const filme = mongoose.model('filme', DataSchema)
module.exports = filme