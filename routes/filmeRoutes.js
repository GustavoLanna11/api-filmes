
import express from 'express';
const filmeRoutes = express.Router();
import filmeController from '../controllers/filmeController.js';
import Auth from '../middleware/Auth.js';

// endpoint para listar os filmes
filmeRoutes.get("/filmes", Auth.Authorization, filmeController.getAllFilmes);
// endpoint para cadastrar um filme novo
filmeRoutes.post("/filme", Auth.Authorization, filmeController.createFilme);
// endpoint para deletar um filme
filmeRoutes.delete("/filme/:id", Auth.Authorization, filmeController.deleteFilme);
// endpoint para editar os filmes
filmeRoutes.put("/filme/:id", Auth.Authorization, filmeController.updateFilme);
// endpoint para lisatr um filme só
filmeRoutes.get("/filme/:id", Auth.Authorization, filmeController.getOneFilme);

export default filmeRoutes
