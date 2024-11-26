import React, { useState,useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username,setusername] = useState('')
    const [password,setPassword] = useState('')



    const {setuser} = useContext(UserContext)


    const handleSumbit =(e) =>{
        e.preventDefault()
        setuser({username,password})
    }



  return (
    <div>
        <h2>Login</h2>
        <input type="text"  value={username}  onChange={(e)=>setusername(e.target.value)}
        placeholder='username' />
        {" "}

        <input type="text" value={password} onChange={(e)=> setPassword(e.target.value)}
        placeholder='Password' />


        <button
        onClick={handleSumbit}> Submit</button>
    </div>
  )
}

export default Login