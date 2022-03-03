const Filme = require("../models/filmes")

module.exports = {
    async index(req, res) {
        const film = await Filme.find();
        res.json(film)
    },

    async detail(req, res) {
        const {_id} = req.params
        const film = await Filme.findOne({_id});
        res.json(film)
    },

    async delete(req, res) {
        const {_id} = req.params
        const user = await Filme.findByIdAndDelete({_id});

        res.json({Message: "Excluido com Sucesso"})
    },

    async create(req, res) {
        const { titulo, elenco, data_lanc, status } = req.body;

        let data = {};

        let film = await Filme.findOne({ titulo })
        if (!film) {
            data = { titulo, elenco, data_lanc, status }
            film = await Filme.create(data)
            return res.status(200).json(film)
        }else{
            return res.status(500).json(film)
        }
    },

    async update(req, res) {
        const { titulo, elenco, data_lanc, status } = req.body;

        let data = {};

        data = { titulo, elenco, data_lanc, status} 
        const film = await Filme.findByIdAndUpdate({_id}, data, {new: true})
        return res.status(200).json(film)
    },

    async elenco(req, res) {
        const {_id} = req.params
        const film = await Filme.findOne({_id});
        res.json(film.elenco)
    },
}