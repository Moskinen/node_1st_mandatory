// Server Setup //

import express from 'express'
import path from 'path'

const app = express()

app.use(express.static('public'))

// Pages //

import { frontpagePage, introductionPage, variablesPage, functionsPage, loopsPage, gitPage, 
         restAPIPage, packageManagementPage, firstServerPage, crudPage, modulesPage, redirectionPage } from './templating/pages.js'

app.get('/', (req, res) => {
    res.send(frontpagePage)
})

app.get('/introduction', (req, res) => {
    res.send(introductionPage)
})

app.get('/variables', (req, res) => {
    res.send(variablesPage)
})

app.get('/functions', (req, res) => {
    res.send(functionsPage)
})

app.get('/loops', (req, res) => {
    res.send(loopsPage)
})

app.get('/git', (req, res) => {
   res.send(gitPage)
})

app.get('/rest_api', (req, res) => {
    res.send(restAPIPage)
})

app.get('/package_management', (req, res) => {
    res.send(packageManagementPage)
})

app.get('/first_server', (req, res) => {
    res.send(firstServerPage)
})

app.get('/crud', (req, res) => {
    res.send(crudPage)
})

app.get('/modules', (req, res) => {
    res.send(modulesPage)
})

app.get('/redirection', (req, res) => {
    res.send(redirectionPage)
})

const PORT = process.env.PORT ?? 8080

app.listen (PORT, (error) => {
    if (error) {
        console.log("Error starting the server", error)
        return
    }
    console.log('Server is running on port', PORT)
})