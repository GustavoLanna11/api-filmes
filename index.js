// Importação do Express
import express from "express";
const app = express();

// importando dependências do swagger para documentar a API
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerOptions from "./config/swagger-config.js";
const swaggerDocs = swaggerJSDoc(swaggerOptions);
// rota para acessar a documentação via SwaggerUI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


// Importação do mongoose
import mongoose from "mongoose"

// iniciando a conexão com o banco de dados do MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/api-filmes");

// Importação do Model de Filmes e usuários
import Filme from "./models/Filmes.js";
import User from './models/Users.js';

// importação das rotas (endpoints)
import filmeRoutes from "./routes/filmeRoutes.js";
import userRoutes from "./routes/userRoutes.js";

// Configuração do Express
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use("/", filmeRoutes);
app.use("/", userRoutes);

// Rodando a API
const port = 4000;
app.listen(port, (error) => {
    if(error) {
        console.log(error);
    }
    console.log(`API rodando em http://localhost:${port}`);
})
