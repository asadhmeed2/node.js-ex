import React,{useRef} from "react";

export const Form = ({btnValue,onSubmit}) => {
 const nameRef =useRef();
 const emailRef =useRef();
 
const onFormSubmit=(e)=>{
  e.preventDefault();
        onSubmit(nameRef.current.value, emailRef.current.value);
    }
    return (
    <div className="form" >
      <form className="form" onSubmit={onFormSubmit}>
        <label htmlFor="name">Name</label>
        <input ref={nameRef} type="text" id="name" name="name" />
        <label htmlFor="email">Email</label>
        <input ref={emailRef} type="email" id="email" name="email" />
        <input type="submit" id="submit" name="submit" value={btnValue} />
      </form>
    </div>
  );
};
