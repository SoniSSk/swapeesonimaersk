import React, { useEffect, useState } from 'react';
import router from "next/router";

function Dashboard() {

  const [id, setId ] = useState();
  const [email , setEmail ] = useState();
  const [password, setPassword ] = useState();
  

  
  const handelchangeEmail =  (event) =>{
    setEmail(event.target.value);
    console.log(email);
  };
  const handelchangepassword =  (event) =>{
    setPassword(event.target.value);
    console.log(password);
  };


 const LoginAPI = async () =>{
   const response  = await fetch('/api/auth',{
       method:'POST',
       header:{'Content-Type':'application/json'}, body:JSON.stringify({
           password: password,
           email: email,
       })},
   )
  .then(response => response.json())
  
  .then((json)=>{
    localStorage.setItem("user" ,JSON.stringify(json) );
    router.push("/dashboard");
  })
  
}

 useEffect(() => {

   localStorage.removeItem("user");
 },[])

  const onSubmitCall  =()=>{
   
  
    if (!/\S+@\S+\.\S+/.test(email)){
        alert("Email Is not Valid ");
       // break;
    }
    if (password ==null){
      alert("password is not null");
    }
    if (name == null){
      alert("name is not null")
    }
     else {LoginAPI();}
    
    //  else if (email = localStorage)


   
else {
  // alert(JSON.stringify(name) + " " +JSON.stringify(mobile) + " " + JSON.stringify(email) +" " + JSON.stringify(address));
  //   console.log(name);
  //   console.log(email);
  //   console.log(setPassword);
 
   // alert("mobile.length");
   
  }
  
  
  };

  const   
  onSubmitCallSignup  =()=>{
    
   router.push("/registration");

  
  };



  return (
                    <div  >
                    <div style={{
                marginTop:50,
                }} ></div>
                <div style={{
                margin: "auto",
                width: 200,
                border: 5,
                borderColor: "grey",
                borderStyle:"solid",
                borderRadius:20,
                padding: 10,}}>
                <form >
                <lable> <b style={{backgroundColor:'skyblue'}}>Login </b> </lable><br/><br/>
                <lable> Email:<input type = "email" value= {email} onChange= {handelchangeEmail} placeholder="Enter email"></input></lable><br/><br/>
                <lable> Password:<input  type = "text" value= {password} onChange= {handelchangepassword} placeholder="Enter password"></input></lable><br/><br/>
                <input  type ="button" onClick={onSubmitCall} value="Login" /><br/><br/><br/>
                <input  type ="button" onClick={onSubmitCallSignup} value="Signup" />
                </form>
                </div>
                </div>
  );
}

export default Dashboard;
