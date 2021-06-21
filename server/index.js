//import express from "express"; doesnt work
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const mysql = require("mysql");


const app = express();
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"boban1234",
    database:"accounts"
})

app.post("/api/register", (req,res)=>{
    const sqlInsert = "INSERT INTO account_details (accountLoginName, accountPassword, accountEmail) VALUE (?,?,?)" 
    const registerName = req.body.registerName;
    const registerPassword = req.body.registerPassword;
    const registerEmail = req.body.registerEmail;
    db.query(sqlInsert, [registerName, registerPassword, registerEmail], (err,result)=>{

    })
})

app.put("/api/edit/account", (req,res)=>{
    //const updateName = req.body.updateName;
    const updatePassword = req.body.updatePassword;
    const updateEmail = req.body.updateEmail;
    const updateFullName = req.body.updateFullName;
    const updateAccountAge = req.body.updateAccountAge;
    const accountLoginName = req.body.accountLoginName;
    const updateAvatar = req.body.updateAvatar

    const sqlUpdate = "UPDATE account_details SET accountPassword = ?, accountEmail = ?, accountFullName = ?, accountAge = ?, accountAvatar = ? WHERE accountLoginName = ?"
    db.query(sqlUpdate, [updatePassword, updateEmail, updateFullName, updateAccountAge, updateAvatar, accountLoginName] , (err,result)=>{
        console.log(err)
    })
})

app.put("/api/edit/account/favorites",(req,res)=>{
    const updateFavorites = req.body.updateFavorites;
    const accountLoginName = req.body.accountLoginName;
    const sqlUpdate = "UPDATE account_details SET accountFavorites = ? WHERE accountLoginName = ?"
    db.query(sqlUpdate, [updateFavorites, accountLoginName],(err,res) =>{
        console.log(err)
    })
})

app.get("/api/accounts", (req,res)=>{
    const sqlSelect = "SELECT * FROM account_details"
    db.query(sqlSelect, (err,result)=>{
        res.send(result);
    })
})

app.get("/api/login", (req,res)=>{
    const sqlSelect = "SELECT * FROM account_details"
    db.query(sqlSelect, (err,result)=>{
        res.send(result);
    })
})
app.listen("3001", ()=>{
    console.log("listening")
})