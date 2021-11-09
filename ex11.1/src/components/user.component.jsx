import React from "react";

export const User = ({name,email}) => {
    return (
    <div className="form" >
        <label>Name</label>
        <div id="name">
          {name}
        </div>
        <label>Email</label>
        <div  id="email" >
          {email}
        </div>
    </div>
  );
};
