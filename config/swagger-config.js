const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0", 
    info: {
      title: "API Filmes",
      description: "API para catálogo de Filmes, permitindo o cadastro, edição e exclusão dos filmes, através de uma autenticação de usuário.",
      version: "1.0",
      contact: {
        name: "Gustavo Lanna",
      },
      servers: [{ url: "http://localhost:4000" }],
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT", 
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./routes/*.js", "./docs/swaggerDocs.yaml"], // Caminho para documentar as rotas
};

export default swaggerOptions;