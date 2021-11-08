const fs = require('fs');

module.exports=getUser=(id)=>{
    return JSON.parse(fs.readFileSync('users.json').toString()).find((user)=>user.id===id);
}