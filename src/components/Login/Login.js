import React, {useEffect} from "react";
import './Login.css'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Login=()=>{

    const[email, setEmail]=useState('')
    const[password, setPass]=useState('')
     const nav=useNavigate()


     useEffect(()=>{
        const data = localStorage.getItem('woner')
        if(data){
            nav('/')
        }
    });

    const loginData=async()=>{
        let result= await fetch('http://localhost:5000/login', {
            method: 'post',
            body: JSON.stringify({ email, password}),
            headers:{
                'Content-Type':'application/json'
            }
        })
      
         result=await result.json()
         console.warn(result.auth)
         console.warn(result)
      
    
        if(result.auth ){
            console.log(result.auth);
        localStorage.setItem("woner",JSON.stringify(result.user.name))
        localStorage.setItem("data",JSON.stringify(result.user))
        localStorage.setItem("token",JSON.stringify(result.auth))
        nav('/')
        }else{
            alert(result.message)
        }
    }

    return (
        <div className="login">
            <h1>Log In</h1>
            <input className="inputBox" value={email} onChange={(e)=>setEmail(e.target.value)}  type='text' placeholder="Enter Email"/>
            <input className="inputBox" value={password} onChange={(e)=>setPass(e.target.value)} type='password' placeholder="Enter Password"/>
            <button onClick={loginData} className="btn-log" type="button">Login</button>
        </div>
    )
}

export default Login