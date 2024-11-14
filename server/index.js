const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const MahasiswaModel = require('./models/mahasiswa');


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/mahasiswa')


app.post('/login', (req, res) => {
    const { username, password } = req.body;

    MahasiswaModel.findOne({username: username})
    .then(user => {
        if(user){
            if(user.password === password){
                res.send({message: "Login Berhasil"});
            } else {
                res.send({message: "Password Salah"});
            }
        } else {
            res.send({message: "Username tidak ditemukan"});
        }
    })
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});