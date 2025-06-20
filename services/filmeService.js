// Importando o modelo Filme
import Filme from "../models/Filmes.js";

// classe dos métodos de manipulação de dados do banco
class filmeService {
    async getAll() {
        try{
            const filmes = await Filme.find();
            return filmes;
        } catch (error) {
            console.log(error);
        }
    }

    // Método para cadastrar novos filmes
    async Create(title, year, genre, ageRating, director, language, synopsis, duration) {
        try{
            const newFilme = new Filme({
                title,
                year,
                genre,
                ageRating,
                director,
                language,
                synopsis,
                duration
            })
            await newFilme.save()
        } catch(error) {
            console.log(error)
        }
    }
};

export default new filmeService();