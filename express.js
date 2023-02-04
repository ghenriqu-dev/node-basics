const express = require('express')
const app = express()
const port = 8080

app.listen(port, () => console.log(`Rodando na porta: ${port}`))

app.get('/', (request, response) => {
    response.status(200).send('<h1>Hello World!</h1>')
})