// importação do filmeService
import filmeService from "../services/filmeService.js";

// Função assíncrona chamando o método getAll
const getAllFilmes = async (req, res) => {
    try{
        const filmes = await filmeService.getAll();
        res.status(200).json({ filmes: filmes });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Erro interno no servidor. " });
    }
};

export default { getAllFilmes };