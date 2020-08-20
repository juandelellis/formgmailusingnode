const nodemailer = require('nodemailer');
const mailGun =require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: 'key-8ee5de133b38b61c68672d90d2b89e8e',
        domain: 'sandbox168efb10353d4d9b8923657d39457570.mailgun.org'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));
const sendMail = (email, subject, text) => {
    const mailOptions = {
        from: email,
        to: 'juandelellis@gmail.com',
        subject,
        text,
    };
    
    transporter.sendMail(mailOptions, function (err, data){
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
    } )  
}


/*const mailOptions = {
    from: 'juantecsol@gmail.com',
    to: 'juandelellis@gmail.com',
    subject: 'Prueba',
    text: 'Probando si funciona',
};

transporter.sendMail(mailOptions, function (err, data){
    if (err) {
        console.log ('Ocurre Error');
    } else {
        console.log ('Mensaje enviado');
    }
} )
*/
module.exports = sendMail;
