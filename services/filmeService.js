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

    // Método para deletar filmes
    async Delete(id) {
        try{
            await Filme.findByIdAndDelete(id);
            console.log(`Filme com a id: ${id} foi deletado!`);
        } catch (error) {
            console.log(error)
        }
    }

    // Método para alterar os dados
    async Update(id, title, year, genre, ageRating, director, language, synopsis, duration) {
        try{
            const updatedFilme = await Filme.findByIdAndUpdate(
                id,
                {
                    title,
                    year,
                    genre,
                    ageRating,
                    director,
                    language,
                    synopsis,
                    duration
                },
                { new: true }
            );
            console.log(`Dados do Filme com id: ${id} alterados com sucesso.`);
            return updatedFilme;
        } catch(error) {
            console.log(error);
        }
    }

    // Listando um único registro
    async getOne(id){
        try{
            const filme = await Filme.findOne({_id: id})
            return filme
        } catch (error) {
            console.log(error)
        }
    }
};

export default new filmeService();