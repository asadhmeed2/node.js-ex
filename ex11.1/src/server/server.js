const express = require('express');
const bodyParser = require('body-parser')
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const uniqid = require('uniqid')

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.post('/', (req, res) => {
    if(!fs.existsSync(path.resolve(__dirname,'../user.json'))) {
        fs.writeFileSync('user.json','[]');
    }
    let persons = new Promise((resolve,reject) => {
        fs.readFile(path.resolve(__dirname,'../user.json'),(err,data) => {
            if(err){
                reject(err);
            }
            console.log(data.toString());
            resolve(JSON.parse(data.toString()));
        })
    });
    persons.then((data)=>{
        if(data.find((person)=> { return req.body.email ===person.email })){
            return res.status(200).send('user exist')
        }
        const person = {
            id:uniqid(),
            name: req.body.name,
            email: req.body.email,
        }
        console.log(data);
        let temp = [...data, person]
        console.log(temp);
        new Promise((resolve, reject)=>{
            console.log(__dirname);
            fs.writeFileSync(path.resolve(__dirname,'../user.json'),JSON.stringify(temp));
            resolve(person);
        })
        .then(person=>{
            return res.status(201).json({user:person})
        }).catch(err=>{
            console.log(err);
            return res.status(500).json('Internal Server Error')
        })
    }).catch(err=>{
        return res.status(404).json("file not found")
    })
})
app.get('/', (req, res) => {
     new Promise((resolve,reject) => {
        fs.readFile(path.resolve(__dirname,'../user.json'),(err,data) => {
            if(err){
                reject(err);
            }
            resolve(JSON.parse(data.toString()));
        })
    }).then(data=>{
        res.status(200).json(data)
    });
})
app.listen(4000,()=>{console.log("listening at port 4000");})