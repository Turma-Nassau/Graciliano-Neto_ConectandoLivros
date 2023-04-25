<h1 align="center"> :books: Conectando Livros </h1>

> Status: desenvolvimento ⚠️
## :pushpin: Objetivo
* O conectando livros é uma aplicação que tem a finalidade de aumentar a acessibilidade de leitores de qualquer gênero literário. Sendo capaz que seus usuários publiquem livros e criem comunidades para que possam discutir de forma crítica sobre as obras.

## :pushpin: Funcionalidades 
* Fazer donwload de livros.
* Fazer Uploading de livros.
* Comunidade integrada.
* Desenvolver obras literárias.


## :pushpin: Tecnologias Utilizadas 
**Front-end:** React, TailwindCSS

**Back-end:** Node, Express, PostgreSQL

## :pushpin: Colaboradores 
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Graciliano-Neto">
        <sub>
          <b>Graciliano Neto</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## :pushpin: Mockup/Storyboard

- [Figma](https://www.figma.com/file/afGQmgdNhhrzt15v4TWyqf/Planner-Financeiro?node-id=0%3A1&t=vc4LcWT1ifejr4em-1) In Progress

![image](https://user-images.githubusercontent.com/116576105/234355103-15dec49a-3f7c-4bb7-a46d-3e1ee061b452.png)


 ## :pushpin: Estrutura de Dados
- Cliente
  - Deverá fazer cadastro de usuário/cliente.
  
```s
Usuario {
    nome:"Nome Usuario"
    sobrenome_user:"Sobrenome Usuario"
    email:"examplo@examplo.com"
    senha:"123abc"
    user_id:01   
    }

```

- Desenvolvedor
  - Deverá fazer cadastro de desenvolvedor/autor.

```s
Desenvolvedor {
    desenvolvedor_id:8080 
    nome_desenvolvedor:"Nome Desenvolvedor"
    sobrenome_desenvolvedor:"Sobrenome Desenvolvedor"
    email_desenvolvedor:"examplo@examplo.com"
    senha:"123abc"
    }

```

- Livros
  - Estrutura referente aos livros armazenados na plataforma.
 
```s
Livros {
    titulo:"Titulo do Livro"
    descricao:"Descrição do Livro"
    autor:"Autor do Livro"
    editora:="Editora do Livro"  
    ano_publicacao:2023 
    edicao:"Edição do Livro": 
    id_book:07 
   }

```

## :pushpin: Implementação Futura
* Projeto poderá conter algumas alterações de melhorias.
