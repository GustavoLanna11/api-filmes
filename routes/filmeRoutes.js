import express from 'express'
const filmeRoutes = express.Router()
import filmeController from '../controllers/filmeController.js'

// endpoint para listar os filmes
filmeRoutes.get("/filmes", filmeController.getAllFilmes);
// endpoint para cadastrar um filme novo
filmeRoutes.post("/filme", filmeController.createFilme);
// endpoint para deletar um filme
filmeRoutes.delete("/filme/:id", filmeController.deleteFilme);
// endpoint para editar os filmes
filmeRoutes.put("/filme/:id", filmeController.updateFilme);
// endpoint para lisatr um filme só
filmeRoutes.get("/filme/:id", filmeController.getOneFilme);

export default filmeRoutes