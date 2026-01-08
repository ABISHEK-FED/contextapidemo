import React from 'react'
import { useContext } from 'react'
import { LoginContext } from '../contexts/LoginContext'
//import { useState } from 'react'
function Login() {
    const {setName,setProfileInfo}=useContext(LoginContext)
   // const [name,setName]=useState("")
     //const [pwd,setPwd]=useState("")
      //const [profileinfo,setProfileinfo]=useState(false)
   //   const show =()=>{
   //     if (name==="abishek" && pwd==="admin@123")
     //       setProfileinfo(true)
       // else
         //   setProfileinfo(false)
      //}
    
  return (
    <div>
      <input type='text' onChange={(e)=>setName(e.target.value)}  placeholder='enter name'></input><br></br>
      <input type='password'placeholder='Enter Password'></input><br></br>
      <input type='button' onClick={()=>setProfileInfo(true)} value="login"></input>
      <br></br>
      {/*{(profileinfo && "Valid User:"+name)|| "Invalid User !!!"*/}
    </div>
  )
}

export default Login
