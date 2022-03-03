const Usuario = require("../models/usuario")

module.exports = {
    async index(req, res) {
        const user = await Usuario.find();
        res.json(user)
    },

    async detail(req, res) {
        const {_id} = req.params
        const user = await Usuario.findOne({_id});
        res.json(user)
    },

    async delete(req, res) {
        const {_id} = req.params
        const user = await Usuario.findByIdAndDelete({_id});

        res.json({Message: "Excluido com Sucesso"})
    },

    async create(req, res) {
        const { nome, cpf, email, telefone, endereco, senha } = req.body;

        let data = {};

        let user = await Usuario.findOne({ cpf })
        if (!user) {
            data = { nome, cpf, email, telefone, endereco, senha }
            user = await Usuario.create(data)
            return res.status(200).json(user)
        }else{
            return res.status(500).json(user)
        }
    },

    async update(req, res) {
        const { _id, nome, email, tipo, senha } = req.body;

        let data = {};

        data = { _id, nome, email, tipo, senha } 
        const user = await Usuario.findByIdAndUpdate({_id}, data, {new: true})
        return res.status(200).json(user)
    }
}