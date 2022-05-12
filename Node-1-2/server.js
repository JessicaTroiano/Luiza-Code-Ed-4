import express from "express"

import bodyParser from "body-parser"

import routers from './src/routers/'


const app = express()

app.use(bodyParser.json())

app.use('/', routers)

app.listen(3000, () => {
    console.log("Executando na porta 3000")
})