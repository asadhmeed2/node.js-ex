const fs = require('fs');
module.exports=deleteUser=(id)=>{
    const users= JSON.parse(fs.readFileSync('users.json').toString());
    const tmapUsres=users.filter((user) => user.id!==id);
    fs.writeFileSync('users.json',JSON.stringify(tmapUsres));
}
    