const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UsersModel = require("./model/Users")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/IT_database");

app.post("/login", (req, res) => {
    const {email, password} = req.body;
    UsersModel.findOne({email : email})
    .then(user => {
        if(user) {
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("The password is incorrect")
            }
        }else{
            res.json("No record existed")
        }
    })
})

app.post("/register", (req, res) => {
    UsersModel.create(req.body)
    .then(Users => res.json(Users))
    .catch(err => res.json(err))
})


app.listen(3001, () => {
    console.log("server is running")
})