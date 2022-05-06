require('dotenv').config();

export default function (req, res) {
    const nodemailer = require('nodemailer');
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASSWORD;
    
    const transport = nodemailer.createTransport({
        port: 465,
        host: "smtp.strato.com",
        type: "login",
        auth: {
          user,
          pass,
        }
    })

    const mailData = {
        to: user,
        from: user,
        subject: `${req.body.name} Te está pidiendo presupuesto`,
        html: `<h1>Hola Antonio</h1> <p>${req.body.name} Te ha enviado una petición de presupuesto</p> <p>${req.body.text}</p> <p>${req.body.email}</p> <p>${req.body.tlf}</P>`
    }
        

    transport.sendMail(mailData, (error, response) => {
        if (error) {
            console.log(error)
            res.end("error")
        } else {
            console.log("Message sent")
            res.end("sent")
        }

        transport.close();
    })

}