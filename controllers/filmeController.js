// importação do filmeService
import filmeService from "../services/filmeService.js";
// Importando o objectID para identificar cada filme
import { ObjectId } from 'mongodb';

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

// Cadastrando um novo filme
const createFilme = async(req,res) => {
    try{
        const { title, year, genre, ageRating, director, language, synopsis, duration } = req.body;
        await filmeService.Create( title, year, genre, ageRating, director, language, synopsis, duration );
        res.sendStatus(201);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Erro interno no servidor"});
    }
}

// Deletando um filme
const deleteFilme = async (req, res) => {
    try{
        if(ObjectId.isValid(req.params.id)){
            const id = req.params.id
            filmeService.Delete(id)
            res.sendStatus(204) //No content
        } else {
            res.sendStatus(400) //bad request
        }
    } catch(error) {
        console.log(error)
        res.status(500).json({ error: 'Erro interno de servidor' })
    }
}

// Alterando um Filme
const updateFilme = async(req,res) => {
    try{
        if(ObjectId.isValid(req.params.id)) {
            const id = req.params.id;
            const { title, year, genre, ageRating, director, language, synopsis, duration } = req.body;
            const filme = await filmeService.Update( id, title, year, genre, ageRating, director, language, synopsis, duration );
            res.status(200).json({ filme });
        } else {
            res.sendStatus(400); 
        }
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

// Listando um único filme
const getOneFilme = async(req, res) => {
    try{
        if (ObjectId.isValid(req.params.id)) {
            const id = req.params.id
            const filme = await filmeService.getOne(id)
            if(!filme) {
                res.sendStatus(404) //filme não encontrado
            } else {
                res.status(200).json({filme})
            }
        } else {
            res.sendStatus(400)
        }
    } catch(error) {
        console.log(error)
        res.sendStaus(500)
    }
}

export default { getAllFilmes, createFilme, deleteFilme, updateFilme, getOneFilme };