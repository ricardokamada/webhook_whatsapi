const express = require('express');
const bodyParser = require('body-parser');

const app = express()

const port = 3000

app.use(bodyParser())

app.get('/api/whatsapp/', (req, res)=> {
    //res.send("Tudo certo na rota 3 !  ")
    console.log(req.body)
    res.status(200).send('webhook recebido com sucesso !  Samuel')
})

app.get('/', (req, res)=> {
    res.send("Hello wolrd ! Webhook for whatsapp with api ")

})


app.listen(port, ()=> {
    console.log(`Server is running in port ${port}`);
})