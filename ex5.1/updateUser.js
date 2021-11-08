const fs = require('fs');


module.exports=updateUser=(id,userName,email)=>{
    const users= JSON.parse(fs.readFileSync('users.json').toString());
    users.forEach((user,i) => {
       if(user.id===id){
           let tempUser={...user};
            tempUser.name=userName;
            tempUser.email=email;
            users[i]=tempUser;
       } 
    });
    fs.writeFileSync('users.json',JSON.stringify(users))
    }