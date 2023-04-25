const express = require('express');
const app = express();


const fs = require('fs');
let PORT = 8080;
const bodyParser = require('body-parser');
const swaggerFile = require('./swagger_output.json');
const swaggerUi = require('swagger-ui-express');


const userRoutes = require('./routes/userRoutes')
const desenRoutes = require('./routes/desenRoutes')
const livrosRoutes = require('./routes/livrosRoutes')
const { sequelize } = require('./models')

app.use(logger)

const connectDB = async () => {
    console.log('Checando conexao com banco de dados');
    try {
        await sequelize.authenticate();
        console.log('Banco de dados Conectado');
    }
    catch (e) {
        console.log('Conexao falhou', e);
        process.exit(1)
    }
}

(async () => {
    await connectDB();
    app.use(bodyParser.json())

    app.use(bodyParser.urlencoded({
        extended: true,
    }))

    
    app.use('/api/users', userRoutes);
    app.use('/api/desen', desenRoutes);
    app.use('/api/livros', livrosRoutes);
    app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerFile));

    app.listen(PORT, () => {
        console.log(`Rodando na Porta ${PORT}.`)
    })

})()

function logger(request, response, next) {
    let log = `${new Date()}, ${request.method}, ${request.url}, ${request.body} \n`;
    fs.appendFile('./LOGGING.log', log, (err) => {
        if (err) throw err;
        console.log(log)
    })
    next()
}