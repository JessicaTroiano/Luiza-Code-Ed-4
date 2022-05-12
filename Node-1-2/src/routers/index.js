import express from "express";
import routerProdutos from '../produtos/produtos-routers'

const router = express.Router()

router.use('/',  routerProdutos);

// router.get('/teste', (req, res, next) => res.send ('Ola teste.'));

// router.post('/teste2', (req, res, next) => {
//     console.log("Conteúdo da requisição", req.body)
//     res.send('Olá teste');
// })

// const myLogger = (req, res, next) => {
//     console.log('Executando o log')
//     next()
// }

export default router;