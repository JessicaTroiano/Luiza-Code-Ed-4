import express from 'express'
import RouterProdutos from '../produtos/produtos-routers'

const router = express.Router()

router.use('/produtos', RouterProdutos)

export default router
