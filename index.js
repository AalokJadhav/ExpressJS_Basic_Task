const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
const router = require('./userRoutes');

const app = express();
const port = 4000;
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use('/api/v1',router);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
    console.log(path.join(__dirname + "/public/index.html"));
});

//to get json file
app.get('/api/v1/getdata',(req, res) => {
    res.json({
        name: 'Alok',
        email: 'alok@gmail.com',
        password: 'qwerty'
    })
})


app.listen(port, () => {
    console.log(`Server is Running on Port: ${port}`);
})