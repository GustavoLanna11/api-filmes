// Importação do Express
import express from "express";
const app = express();

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
