const Sequelize=require('sequelize');
const { sequelize } = require('../models');
const userModel = require('../models/livros')(sequelize, Sequelize.DataTypes, Sequelize.Model);

exports.criarLivros = async (req, res) => {
    console.log('POST');
     console.log(req.body);
     await userModel.create({
         titulo: req.body.titulo,
         descricao: req.body.descricao,
         autor: req.body.autor,
         editora: req.body.editora,
         ano_publicacao: req.body.ano_publicacao,
         edicao: req.body.edicao,
         id_book: req.body.id_book,
     }).then((result) => {
         res.status(201).json({
             message: "Livro criado com sucesso!",
             user: result
         });
     }).catch((err) => {
         res.status(500).json({
             message: "Erro ao criar livro",
             error: err
         });
     });
 }

 //Crud Livros
exports.verTodosLivros = async (req, res) => {
    console.log('GET');
    await userModel.findAll().then((result) => {
        res.status(200).json({
            message: "Livros encontrados com sucesso!",
            users: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar livros",
            error: err
        });
    });
}

exports.verLivrosPorId = async (req, res) => {
    console.log('GET');
    await userModel.findByPk(req.params.id).then((result) => {
        if(result == null){
            res.status(404).json({
                message: "Livro não encontrado",
            });
            return;
        }
        res.status(200).json({
            message: "Livro encontrado com sucesso!",
            user: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar livro",
            error: err
        });
    });
}

exports.atualizarLivros = async (req, res) => {
    console.log('PATCH');
    await userModel.update({
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        autor: req.body.autor,
        editora: req.body.editora,
        ano_publicacao: req.body.ano_publicacao,
        edicao: req.body.edicao,
        id_book: req.body.id_book,
    }, {
        where: {
            id: req.params.id
        }
    }).then((result) => {
        if(result == 0){
            res.status(404).json({
                message: "Livro não encontrado",
            });
            return;
        }
        res.status(200).json({
            message: "Livro atualizado com sucesso!",
            user: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao atualizar livro",
            error: err
        });
    });
}

exports.deletarLivros = async (req, res) => {
    console.log('DELETE');
    await userModel.destroy({
        where: {
            id: req.params.id
        }
    }).then((result) => {
        res.status(200).json({
            message: "Livro deletado com sucesso!",
            user: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao deletar livro",
            error: err
        });
    });
}