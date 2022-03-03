const mongoose = require('mongoose')

const conn = mongoose.connect('mongodb://localhost:27017/essent', { 
    useUnifiedTopology: true,
    useNewUrlParser: true
},function(err){
    if(err){
        console.log(err)
    }else{
        console.log("Mongo Db conectado com sucesso!")
    }
})

module.exports = conn