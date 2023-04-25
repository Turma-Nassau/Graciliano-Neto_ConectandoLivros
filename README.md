<h1> Conectando Livros </h1>

> Status: desenvolvimento ⚠️
## Objetivo
* O conectando livros é um aplicativo que tem a finalidade de aumentar a acessibilidade de leitores de qualquer gênero literário. Sendo capaz que seus usuários publiquem livros e criem comunidades para que possam discutir de forma crítica sobre as obras.

### Funcionalidades 
* Fazer donwload de livros.
* Comunidade integrada.
* Desenvolver obras literárias.


### Tecnologias utilizadas 
* HTML
* CSS
* Javascript
* Node.J
* Postgres


 ### Estrutura de Dados
- Cliente
  - Deverá Fazer Cadastro de sua Ideia.
  
~~~~MySql
const Administrador = MySql.sequelize.define('administrador', {

    nome: {
        type: MySql.Sequelize.STRING(30)
    },

    sobrenome: {
        type: MySql.Sequelize.STRING(40)
    },

    email: {
        type: MySql.Sequelize.STRING(50)
    },

    senha: {
        type: MySql.Sequelize.STRING(30)
    }
} , { freezeTableName: true });
~~~~
