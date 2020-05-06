const nodemailer = require("nodemailer");

async function sendEmail({ name, email, message }) {
  
    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.user,
            pass: process.env.pass
        }
    })

    await transport.sendMail({
        from: email,
        subject: message.slice(message.length, 5),
        to: "jorgeluis21.duran@gmail.com",
        html: `
                <h1>Hello I'm ${name}</h1>
                <p>${message}</p>
            `
    })
}

module.exports = sendEmail