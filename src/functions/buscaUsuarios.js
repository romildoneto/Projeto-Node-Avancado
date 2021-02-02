const fetch = require('node-fetch')

module.exports = async function buscaUsuario(usuarios){
const response = await fetch(`https://api.github.com/users/${usuarios}`)
    const json = await response.json()

    return json
}