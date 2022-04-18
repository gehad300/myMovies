import React, { useState } from "react";
export default function Register() {
  //real values
  const [userform, setUserform] = useState({
    username: "",
    email: "",
    name:"",
    password:"",
    confirmPassword:""
  });
  //values with errors
  const [userformErr, setUserformErr] = useState({
    usernameErr: null,
    emailErr: null,
    passwordErr: null,
    nameErr:null,
    confirmPasswordErr:null,
  });
  const handleUserChange = (e) => {
    // console.log(e.target.value, e.target.id);
    // eslint-disable-next-line

    const userRe = /^\S*$/;
    // eslint-disable-next-line
    const emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
    const strongRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})");    //update in the state
    setUserform({
      ...userform,
      [e.target.id]: e.target.value,
    });
    if (e.target.id === "name") {
      setUserformErr({
        ...userformErr,
        nameErr:
          e.target.value.length === 0
            ? "this field is required"
            : e.target.value.length < 3
            ? "min length is 3 character"
            : null,
      });
      

     } else if (e.target.id === "username") {
      setUserformErr({
        ...userformErr,
        usernameErr:
          e.target.value.length === 0
            ? "this field is required"
            : e.target.value.length < 3
            ? "min length is 3 character"
            : !userRe.test(e.target.value)
            ? "invalid spaces"
            : null,
      });
    } else if (e.target.id === "email") {
      setUserformErr({
        ...userformErr,
        emailErr:
        e.target.value.length === 0
           ? "this field is required"
       : !emailRe.test(e.target.value)
            ? "enter a valid email"
            : null,
           
      });
     } else if (e.target.id === "password") {
        setUserformErr({
          ...userformErr,
          passwordErr:
          !strongRegex.test(e.target.value)
              ? "enter strong password"
              : null,
        });
    }
    else if (e.target.id === "confirmPassword") {
      setUserformErr({
        ...userformErr,
        confirmPasswordErr:
          e.target.value.length === 0
            ? "This field is required"
            : e.target.value !== userform.password
            ? "Passwords dosen't match"
            : null,
      });
    }
  
  };
  const validateFields=()=>{
      setUserformErr({
          userformErr:userform.username.length===0? "this field is required":userform.username.length<3?" the length should more 3":null,
      })
  }

  const submitForm = (e) => {
    e.preventDefault();
    validateFields();
    if(
        !userformErr.usernameErr&&
        !userformErr.emailErr&&
        !userformErr.passwordErr&&
        !userformErr.nameErr&&
        !userformErr.con



    ){
        console.log(userform);

    }
  };
  const handlesubmit = (e) => {
    if(
     userform.username=== "",
      userform.email=== "",
      userform.name==="",
      userform.password==="",
      userform.confirmPassword===""
  ){
    e.preventDefault();

  }else if(userformErr.usernameErr && userformErr.emailErr && userformErr.nameErr && userformErr.passwordErr && userformErr.confirmPasswordErr) {
    e.preventDefault();
  } 
  }

  return (
    <div>
      <h2>Registration Form </h2>
      <form onSubmit={(e) => submitForm(e)}>
      <div className="mb-3">
                {/* ///////////////name */}

          <label htmlFor="name">Name</label>
          <input
            type="text"
            className={`form-control ${
              userformErr.nameErr ? "border-danger" : ""
            }`}
            id="name"
            aria-describedby="nameHelp"
            value={userform.name}
            onChange={(e) => handleUserChange(e)}
            placeholder="Enter name"
          />
          {userformErr.nameErr && (
            <div id="nameHelp" className="form-text text-danger">
              {userformErr.nameErr}
            </div>
          )}
        </div>
        {/* //////////////email */}
        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className={`form-control ${
              userformErr.emailErr ? "border-danger" : ""
            }`}
            id="email"
            value={userform.email}
            onChange={(e) => handleUserChange(e)}
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          {userformErr.emailErr && (
            <div id="emailErr" className="form-text text-danger">
              {userformErr.emailErr}
            </div>
          )}
        </div>
        {/* ///////////////UserName */}
        <div className="mb-3">
          <label htmlFor="username">username</label>
          <input
            type="text"
            className={`form-control ${
              userformErr.usernameErr ? "border-danger" : ""
            }`}
            id="username"
            aria-describedby="usernameHelp"
            value={userform.username}
            onChange={(e) => handleUserChange(e)}
            placeholder="Enter username"
          />
          {userformErr.usernameErr && (
            <div id="usernameHelp" className="form-text text-danger">
              {userformErr.usernameErr}
            </div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="Text"
            className={`form-control ${
              userformErr.passwordErr ? "border-danger" : ""
            }`}
            id="password"
            value={userform.password}
            onChange={(e) => handleUserChange(e)}
            aria-describedby="passwordHelp"
            placeholder="Enter Password"
          />
          {userformErr.passwordErr && (
            <div id="passwordHelp" className="form-text text-danger">
              {userformErr.passwordErr}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="Text"
            className={`form-control ${
              userformErr.confirmPasswordErr ? "border-danger" : ""
            }`}
            id="confirmPassword"
            value={userform.confirmPassword}
            onChange={(e) => handleUserChange(e)}
            aria-describedby="confirmPasswordHelp"
            placeholder="Confirm Password"
          />
          {userformErr.confirmPasswordErr && (
            <div id="confirmPasswordHelp" className="form-text text-danger">
              {userformErr.confirmPasswordErr}
            </div>
          )}
        </div>

        <button type="submit" className="btn btn-success" onClick={handlesubmit}>
          Register
        </button>
      </form>
    </div>
  );
}