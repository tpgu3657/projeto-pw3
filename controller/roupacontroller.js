const express = require('express');


const router = express.Router();


const modelroupa = require('../model/roupaModel');

router.get('/listarroupa', (req, res)=>{


    modelroupa.findAll()
        .then(
            (categorias)=>{
                return res.status(200).json(roupa);
            }
        ).catch(
            (erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    erroMessagem: 'Houve um erro ao selecionar os dados de roupa',
                    erroBancoDados: erro
                });
            }
        );

});


router.get('/listarroupa/:id',(req, res)=>{

    let {id} = req.params;

    modelroupa.findByPk(id)
        .then(
            (roupaModel)=>{
                res.status(200).json(roupa);
            }
        ).catch(
            (erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    erroMessagem: 'Houve um erro ao selecionar os dados de roupa',
                    erroBancoDados: erro
                });
            }
        );

});

router.post('/inserirroupa', (req, res)=>{

    let {nome_roupamodel} = req.body;
    
    modelroupa.create(
        {nome_roupamodel}
    ).then(
        ()=>{
                return res.status(201).json({
                    erroStatus: false,
                    menssagemStatus: 'roupa inserida com sucesso!'
            });
        }
    ).catch(
        (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Houve um erro ao cadastrar a roupa',
                        erroBancoDados: erro
                    });
        }
    );

});

router.put('/alterarroupa', (req, res)=>{

    
    let {id, nome_roupamodel} = req.body;

    modelroupa.update(
        {nome_roupamodel},
        {where:{id}}
    ).then( ()=>{

        return res.status(200).json({
            erroStatus: false,
            menssagemStatus: 'roupa alterada com sucesso!'
        });

    }).catch(
        (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Houve um erro ao alterar a roupa',
                        erroBancoDados: erro
                    });
        }
    );

});

router.delete('/excluirroupa/:id', (req, res)=>{

    let {id} = req.params;

    modelroupa.destroy(
        {where: {id}}
    ).then( ()=>{

        return res.status(200).json({
            erroStatus: false,
            menssagemStatus: 'roupa excluida com sucesso!'
        });

    }).catch(
        (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Houve um erro ao excluir a roupa',
                        erroBancoDados: erro
                    });
        }
    );
    

});

module.exports = router;