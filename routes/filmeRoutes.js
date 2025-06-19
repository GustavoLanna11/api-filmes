import express from 'express'
const filmeRoutes = express.Router()
import filmeController from '../controllers/filmeController.js'

// endpoint para listar os filmes
filmeRoutes.get("/filmes", filmeController.getAllFilmes)

export default filmeRoutes