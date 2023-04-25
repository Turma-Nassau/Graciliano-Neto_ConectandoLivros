<h1 align="center"> :books: Conectando Livros </h1>

> Status: desenvolvimento ⚠️
## :pushpin: Objetivo
* O conectando livros é um aplicativo que tem a finalidade de aumentar a acessibilidade de leitores de qualquer gênero literário. Sendo capaz que seus usuários publiquem livros e criem comunidades para que possam discutir de forma crítica sobre as obras.

## :pushpin: Funcionalidades 
* Fazer donwload de livros.
* Fazer Uploading de livros.
* Comunidade integrada.
* Desenvolver obras literárias.


## :pushpin: Tecnologias utilizadas 
**Front-end:** React, TailwindCSS

**Back-end:** Node, Express, PostgreSQL

## :handshake: Colaboradores :man_technologist:
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Graciliano-Neto">
        <sub>
          <b>GracilianoNeto</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

 ## Estrutura de Dados
- Cliente
  - Deverá fazer cadastro de usuário/cliente.
  
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
    },
    user_id: {
        type: MySql.Sequelize.INTEGER(4)
    }
} , { freezeTableName: true });
~~~~

- Desenvolvedor
  - Deverá fazer cadastro de desenvolvedor/autor.

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
    },
    
    desenvolvedor_id: {
        type: MySql.Sequelize.INTEGER(4)
    }
} , { freezeTableName: true });
~~~~

- Livros
  - Estrutura referente aos livros armazenados na plataforma.
 
 ~~~~MySql
const Administrador = MySql.sequelize.define('administrador', {

    titulo: {
        type: MySql.Sequelize.STRING(30)
    },

    descricao: {
        type: MySql.Sequelize.STRING(40)
    },

    autor: {
        type: MySql.Sequelize.STRING(50)
    },

    editora: {
        type: MySql.Sequelize.STRING(30)
    },
    
    ano_publicacao: {
        type: MySql.Sequelize.DATE
    },
    
    edicao: {
        type: MySql.Sequelize.STRING(30)
    },
    
    id_book: {
       type: MySql.Sequelize.INTEGER(4)
   }
} , { freezeTableName: true });
~~~~
