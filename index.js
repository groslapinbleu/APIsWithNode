import express from 'express'
// const express = require('express')


import mongoose from 'mongoose'
// import bodyParser from 'body-parser'
// body-parser n'est plus nécessaire car inclut dans express
import routes from './src/routes/crmRoutes.js'


const app = express()
const PORT = 3000


// connexion mongoose
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// utiliser l'équivalent de bodyParser dans express
app.use(express.urlencoded({extended: true}))
app.use(express.json())

routes(app)


app.get('/', (req, res) => {
    res.send('Serveur node et express')
})



app.listen(PORT, () => {
    console.log(`Hello! Je suis à l'écoute sur le port ${PORT}`)
})