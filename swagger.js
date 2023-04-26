const swagger_auto_gen = require('swagger-autogen');
const outputFile = './swagger_output.json';
const endpointsFiles = ['./server.js'];

const docs = {
    info: {
        version: "1.0.0",
        title: "Conectando Livros",
        description: "API para download e upload de livros"
    },
    host: "localhost:8080",
    schemes: ['http'],
};

swagger_auto_gen(outputFile, endpointsFiles, docs);