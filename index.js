const express = require("express")
const mysql = require("mysql2")
const cors = require("cors")

app = express()

app.use(express.json())
app.use(cors())

con = mysql.createConnection({
    host: "127.0.0.1",
    port: 3307,
    user: "root",
    password: "",
    database: "apidb"
})

app.get("/listar", (req, res) => {

    con.query("select * from cliente", (error, result) => {
        if (error) {
            return res.status(500).send({ msg: "Erro ao tentar selecionar os dados dos clientes" })
        }
        res.status(200).send({ msg: "Ok", dados: result })
    })

})

app.post("/cadastrar", (req, res) => {
    con.query("insert into cliente set ?", req.body, (error, result) => {
        if (error) {
            return res.status(500).send({ msg: "Erro ao tentar cadastrar os dados dos clientes" })
        }
        res.status(201).send({ msg: "Cadastrado", dados: result })
    })
})

app.put("/atualizar/:id", (req, res) => {
    con.query("update cliente set ? where idcliente=?", [req.body, req.params.id], (error, result) => {
        if (error) {
            return res.status(500).send({ msg: "Erro ao tentar atualizar os dados dos clientes" })
        }
        res.status(200).send({ msg: "Atualizado", dados: result })
    })
})

app.delete("/apagar/:id", (req, res) => {
    con.query("delete from cliente where idcliente=?", req.params.id, (error, result) => {
        if (error) {
            return res.status(500).send({ msg: "Erro ao tentar apagar os dados dos clientes" })
        }
        res.status(200).send({ msg: "Apagou", dados: result })
    })
})

app.listen(3000, () => console.log("Servidor online em http://localhost:3000"))