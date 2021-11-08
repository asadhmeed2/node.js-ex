const fs = require('fs');
const uniqid =require('uniqid');

module.exports=createUser=(userName,email)=>{
    if(!fs.existsSync('users.json')){
        fs.writeFileSync('users.json', '[]');
    }
    let id = uniqid();
    let file =JSON.parse(fs.readFileSync('users.json').toString());
    file =[...file,{id:id,name:userName,email:email}];
    fs.writeFileSync("users.json",JSON.stringify(file));
}
