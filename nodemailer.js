
const mailGunLoader = require('mailgun-js')

const dev = {
  USER:'jorgeluis21.duran@gmail.com',
DOMAIN_NAME:'sandboxf2337e47213341828ac02e3c3fedb8b0.mailgun.org',
API_KEY:'4d80b385d8dcb95e142ab7e11e9677e7-0afbfc6c-b38b787f'
}

function sendEmail({ name, email, message }) {

    let mailGun = mailGunLoader({
      apiKey: process.env.API_KEY,
      domain: process.env.DOMAIN_NAME
    })

    let data = {
        from: email,
        to: process.env.USER,
        subject: 'hello there',
        text: `hello I'm ${name}\n${message}`
    }

    return mailGun.messages().send(data)

}


module.exports = sendEmail