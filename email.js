

var nodemailer = require("nodemailer");
 
    // console.log("Email enviado");
    var transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "thefastfoodTDW@gmail.com",
            pass: "tecnologias"
        },
    });
    //
    var mailOption = {
        from: "thefastfoodTDW@gmail.com",
        to: "reguido99@gmail.com",
        subject: "Enviado desde nodemailer",
        text: "Hola como estas"
    }
    transporter.sendMail(mailOption, (error, info) => {
        if (error) {
            res.status(500).send(error, message);
        } else {
            console.log("Email Enviado");
            res.status(200).jsonp(req.body);
        }
    });