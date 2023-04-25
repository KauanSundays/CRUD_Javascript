'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')


const tempClient = {
    nome: "Fernando",
    email: "fernando@gmail.com",
    celular: "11987456321",
    cidade: "Holambra"
}

// CRUD

const createClient = (client) => {
    localStorage.setItem("db_client", JSON.stringify(client))
}

    // Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)
