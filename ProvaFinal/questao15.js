import express from 'express' 


const app = express()


app.use(bodyParser.json())

app.use('/', routes)

app.listen(3001, () => {
    console.log('Executando na porta 3001.')
})


const router = express.Router()

router.use('/produtos', RouterProdutos)

export default router

