const express = require("express")
const app = express();
const cors = require("cors")
const bodyParser = require("body-parser")
const sendEmail = require("./nodemailer")
require("dotenv").config()

app.set('port', process.env.PORT || 4040)

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())

app.post('/', async (req, res) => {
    console.log(req.body)
    await sendEmail(req.body).catch(console.error)
    res.send({message: 'send it'})
})

app.listen(app.get('port'), () => {
    console.log(`Server On Port ${app.get('port')}`)
})