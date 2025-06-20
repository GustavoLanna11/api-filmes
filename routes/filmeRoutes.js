import express from 'express'
const filmeRoutes = express.Router()
import filmeController from '../controllers/filmeController.js'

// endpoint para listar os filmes
filmeRoutes.get("/filmes", filmeController.getAllFilmes);
// endpoint para cadastrar um filme novo
filmeRoutes.post("/filme", filmeController.createFilme);

export default filmeRoutes