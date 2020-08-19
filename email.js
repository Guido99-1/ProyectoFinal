
///function enviarreportescorreo(){
    var nodemailer = require("nodemailer");
//     var smtpTransport = require('nodemailer-smtp-transport');
// var transporter = nodemailer.createTransport(smtpTransport({
//     service: 'gmail',
//     host: 'smtp.gmail.com',
//     auth: {
//       user: 'thefastfoodTDW@gmail.com',
//       pass: 'tecnologias'
//     }
//   }));
    //var enviara=document.getElementById('emailreport').value;
     console.log("Email enviado");
     var transporter = nodemailer.createTransport({
         service: "Gmail",
         auth: {
             user: "thefastfoodTDW@gmail.com",
             pass: "tecnologias"
         },
     });
    
    var mailOption = {
        from: "thefastfoodTDW@gmail.com",
        to:"reguido99@gmail.com",
        subject: "FAST FOOD",
        text: `Reporte de venta
               Producto    Cantidad   Precio   Subtotal
               Hamburguesa            2              3,85         7,7   
               Pizza                  1              12,75        12,75
               
               Subtotal: 16,6
               Iva: 1,99
               Total: 18,59`
    }
    transporter.sendMail(mailOption, (error, info) => {
        if (error) {
            res.status(500).send(error, message);
        } else {
            console.log("Email Enviado");
            res.status(200).jsonp(req.body);
        }
    });


//}






