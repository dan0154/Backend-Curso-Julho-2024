const {client} = require("./db")

const listUsers = async (req, res) => {
    res.send('deu tudo certo')
}

const createUser = async (req, res) => {
    try{
        const {nome, email, senha } = req.body;
        const sql = `INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3) RETURNING *`
        const dados = await client.query(sql, [nome, email, senha])
        res.status(201).json({msg: "User criado com sucesso"})
    }catch(err){
        res.status(500).json({msg: "Erro ao criar o usuário"})

    }
}   
const deleteUser = async (req, res) => {
    res.send('deletou um usuário')
}
const updateUser = async (req, res) => {
    res.send('atualizou um usuário')
}
const getUser = async (req, res) => {
    res.send('pegou um usuário')
}

module.exports = {
    listUsers,
    createUser,
    updateUser,
    deleteUser,
    getUser
}