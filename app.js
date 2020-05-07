const express = require("express")
const app = express();
const cors = require("cors")
const bodyParser = require("body-parser")
const sendEmail = require("./nodemailer")

app.set('port', process.env.PORT || 4040)

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())


app.post('/', async (req, res) => {
    try {
        await sendEmail(req.body)
        res.send({message: 'send it'})
    } catch (error) {
        res.status(400).send("error")
        console.log(error)
    }
})

app.listen(app.get('port'), () => {
    console.log(`Server On Port ${app.get('port')}`)
})