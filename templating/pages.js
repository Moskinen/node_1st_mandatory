import { read } from "fs";
import { constructPage, readPage } from "./templatingEnginge.js";

const header = ""
const footer = ""

const frontpage = readPage('public/frontpage/index.html')
const introduction = readPage('public/views/introduction.html')
const variables = readPage('public/views/variables.html')
const functions = readPage('public/views/functions.html')
const loops = readPage('public/views/loops.html')
const git = readPage('public/views/git.html')
const restAPI = readPage('public/views/rest_api.html')
const packageManagement = readPage('public/views/package_management.html')
const firstServer = readPage('public/views/first_server.html')
const crud = readPage('public/views/crud.html')
const modules = readPage('public/views/modules.html')
const redirection = readPage('public/views/redirection.html')
const templating = readPage('public/views/templating.html')

export const frontpagePage = constructPage(frontpage, {
    tabTitle: "Frontpage"
})

export const introductionPage = constructPage(introduction, {
    tabTitle: "Introduction"
})

export const variablesPage = constructPage(variables, {
    tabTitle: "Variables"
})

export const functionsPage = constructPage(functions, {
    tabTitle: "Functions"
})

export const loopsPage = constructPage(loops, {
    tabTitle: "Loops"
})

export const gitPage = constructPage(git, {
    tabTitle: "Git"
})

export const restAPIPage = constructPage(restAPI, {
    tabTitle: "rest_API"
})

export const packageManagementPage = constructPage(packageManagement, {
    tabTitle: "Package Management"
})

export const firstServerPage = constructPage(firstServer, {
    tabTitle: "First Server"
})

export const crudPage = constructPage(crud, {
    tabTitle: "CRUD"
})

export const modulesPage = constructPage(modules, {
    tabTitle: "Modules"
})

export const redirectionPage = constructPage(redirection, {
    tabTitle: "Redirection"
})

export const templatingPage = constructPage(templating, {
    tabTitle: "Templating"
})