const express = require ('express');
const sendMail = require('./mail.js')
const log = console.log;
const app = express();
const path = require('path')
const PORT = 8080;

//Data Parcing

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

app.post('/email', (req, res) =>{
    const {subject, email, text } = req.body;
    console.log('Data: ', req.body);
    sendMail(email, subject, text, function(err,data){
        if (err){
            res.status(500).json({message: 'Error Interno'})
        } else {
            res.json({message: 'Email enviado'});
        }
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(PORT, () => log('Servidor escuchando en PORT, ', 8080));