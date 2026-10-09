import { read } from "fs";
import { constructPage, readPage } from "./templatingEnginge.js";

const header = ""
const footer = ""

const frontpage = readPage('public/frontpage/index.html')
const introduction = readPage('public/views/introduction.html')
const variables = readPage('public/views/variables.html')
const git = readPage('public/views/git.html')
const restAPI = readPage('public/views/rest_api.html')
const functions = readPage('public/views/functions.html')

export const frontpagePage = constructPage(frontpage, {
    tabTitle: "Frontpage"
})

export const introductionPage = constructPage(introduction, {
    tabTitle: "Introduction"
})

export const variablesPage = constructPage(variables, {
    tabTitle: "Variables"
})

export const gitPage = constructPage(git, {
    tabTitle: "Git"
})

export const restAPIPage = constructPage(restAPI, {
    tabTitle: "rest_API"
})

export const functionsPage = constructPage(functions, {
    tabTitle: "Functions"
})