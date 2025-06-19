// Importação do Express
import express from "express";
const app = express();

// Importação do mongoose
import mongoose from "mongoose"
// iniciando a conexão com o banco de dados do MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/api-filmes");

// Importação do Model de Filmes
import Filme from "./models/Filmes.js";

// Configuração do Express
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Dados para testar a API
app.get("/", (req,res) => {
    const filmes = [
        {
            title: "Titanic",
            year: "1909",
            genre: "Romance",
            ageRating: "12"
        }, 
        {
            title: "Teste",
            year: "2025",
            genre: "Drama",
            ageRating: "18"
        }
    ];
    res.json(filmes);
})

// Rodando a API
const port = 4000;
app.listen(port, (error) => {
    if(error) {
        console.log(error);
    }
    console.log(`API rodando em http://localhost:${port}`);
})
