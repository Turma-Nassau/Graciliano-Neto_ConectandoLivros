const Sequelize=require('sequelize');
const { sequelize } = require('../models');
const userModel = require('../models/desenvolvedor')(sequelize, Sequelize.DataTypes, Sequelize.Model);

exports.criarDesenvolvedor = async (req, res) => {
    console.log('POST');
     console.log(req.body);
     await userModel.create({
         nome: req.body.nome,
         sobrenome: req.body.sobrenome,
         email: req.body.email,
         senha: req.body.senha,
         desenvolvedor_id: req.body.desenvolvedor_id,
     }).then((result) => {
         res.status(201).json({
             message: "Desenvolvedor criado com sucesso!",
             user: result
         });
     }).catch((err) => {
         res.status(500).json({
             message: "Erro ao criar desenvolvedor",
             error: err
         });
     });
 }

 //Crud Desenvolvedor
exports.verTodosDesenvolvedor = async (req, res) => {
    console.log('GET');
    await userModel.findAll().then((result) => {
        res.status(200).json({
            message: "Desenvolvedores encontrados com sucesso!",
            users: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar desenvolvedor",
            error: err
        });
    });
}

exports.verDesenvolvedorPorId = async (req, res) => {
    console.log('GET');
    await userModel.findByPk(req.params.id).then((result) => {
        if(result == null){
            res.status(404).json({
                message: "Desenvolvedor não encontrado",
            });
            return;
        }
        res.status(200).json({
            message: "Desenvolvedor encontrado com sucesso!",
            user: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar desenvolvedor",
            error: err
        });
    });
}

exports.atualizarDesenvolvedor = async (req, res) => {
    console.log('PATCH');
    await userModel.update({
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        autor: req.body.autor,
        editora: req.body.editora,
        ano_publicacao: req.body.ano_publicacao,
        edicao: req.body.edicao,
        desenvolvedor_id: req.body.desenvolvedor_id,
    }, {
        where: {
            id: req.params.id
        }
    }).then((result) => {
        if(result == 0){
            res.status(404).json({
                message: "Desenvolvedor não encontrado",
            });
            return;
        }
        res.status(200).json({
            message: "Desenvolvedor atualizado com sucesso!",
            user: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao atualizar desenvolvedor",
            error: err
        });
    });
}

exports.deletarDesenvolvedor = async (req, res) => {
    console.log('DELETE');
    await userModel.destroy({
        where: {
            id: req.params.id
        }
    }).then((result) => {
        res.status(200).json({
            message: "Desenvolvedor deletado com sucesso!",
            user: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao deletar desenvolvedor",
            error: err
        });
    });
}