const express = require('express');
const usuarioController = require('./controllers/Usuario');
const filmeController = require('./controllers/Filme')

const routes = express.Router();

routes.get('/', (req,res) => {
    res.send( "Projeto desenvolvido para ESSENT")
})

// ROTAS DE USUÁRIO
routes.get('/usuario', usuarioController.index) // listar usuarios
routes.post('/usuario', usuarioController.create) // criar usuarios
routes.get('/usuario/:_id', usuarioController.detail) // listar um usuario
routes.delete('/usuario/:_id', usuarioController.delete) // deletar usuario
routes.put('/usuario', usuarioController.update) // atualizar usuario

// ROTAS DE FILME
routes.get('/filme', filmeController.index) // listar filmes
routes.post('/filme', filmeController.create) // criar filmes
routes.get('/filme/:_id', filmeController.detail) // listar um filme
routes.delete('/filme/:_id', filmeController.delete) // deletar filme
routes.put('/filme', filmeController.update) // atualizar filme
routes.get('/filme/elenco/:_id', filmeController.elenco) // buscar elenco


module.exports = routes