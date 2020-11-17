//Client - react

npx create-react-app client
cd to app
npx start


//Server Folder

1. FIrst install the below package shown below

npm init -y
npm i express
npm i body-parser
npm i cors - this is what makes it work with react

2. Create basic server - make sure on different port as react

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send({question: 'What is the answer to life the universe and everything?'});
});

app.post('/', (req, res) => {
    if (req.body.answer == '42') {
        res.send('Correct');
    } else {
        res.send('inCorrect');
    }
});

app,listen(3001);