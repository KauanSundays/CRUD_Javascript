'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')


const tempClient = {
    nome: "mudou",
    email: "cquedsdasdasd@gmail.com",
    celular: "11987456321",
    cidade: "Holambra"
}

// CRUD


// CREATE
const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient))

const createClient = (client) => {
    const dbClient = getLocalStorage()
    dbClient.push(client)
    setLocalStorage(dbClient)
}

// READ
const readClient = () => getLocalStorage()

// UPDATE
const updateClient = (index, client) => {
    const dbClient = readClient()
    dbClient[index] = client
    setLocalStorage(dbClient)
}

// DELETE
const deleteClient = (index) => {
    const dbClient = readClient()
    dbClient.splice(index, 1)
    setLocalStorage(dbClient)
}




 // Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)
