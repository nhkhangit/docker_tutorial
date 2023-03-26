const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const AccountService = require('./service');
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log(username);
    console.log(password);

    const accountExists = await AccountService.checkCredentials(username, password);
    if(accountExists)
    {
       res.status(200).json({success: true, message: "Login successful!", token: '13431413243243241er37132gd32d221039'});
    }
    else{
        res.status(404).json({success: false, message: "Not found"})
    }
})

app.listen(3000,() => console.log("listening on http://localhost:3000/"))