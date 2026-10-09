// Server Setup //

import express from 'express'
import path from 'path'

const app = express()

app.use(express.static('public'))

// Pages //

import { frontpagePage, introductionPage, variablesPage, gitPage, restAPIPage, functionsPage } from './templating/pages.js'

app.get('/', (req, res) => {
    res.send(frontpagePage)
})

app.get('/introduction', (req, res) => {
    res.send(introductionPage)
})

app.get('/variables', (req, res) => {
    res.send(variablesPage)
})

app.get('/git', (req, res) => {
   res.send(gitPage)
})

app.get('/rest_api', (req, res) => {
    res.send(restAPIPage)
})

app.get('/functions', (req, res) => {
    res.send(functionsPage)
})

const PORT = process.env.PORT ?? 8080

app.listen (PORT, (error) => {
    if (error) {
        console.log("Error starting the server", error)
        return
    }
    console.log('Server is running on port', PORT)
})