// Importação do Express
import express from "express";
const app = express();
// Importação do mongoose
import mongoose from "mongoose"
// iniciando a conexão com o banco de dados do MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/api-filmes");
// Importação do Model de Filmes
import Filme from "./models/Filmes.js";

import filmeRoutes from "./routes/filmeRoutes.js";

// Configuração do Express
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use("/", filmeRoutes)

// Rodando a API
const port = 4000;
app.listen(port, (error) => {
    if(error) {
        console.log(error);
    }
    console.log(`API rodando em http://localhost:${port}`);
})
