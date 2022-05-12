import express from "express";
import ProdutoController from "./produto-controller";

const router = express.Router()

import routers from './produto-controller'
const produtoController = new ProdutoController()

router.get('/', (req, res) => produtoController.get(req, res));

export default router