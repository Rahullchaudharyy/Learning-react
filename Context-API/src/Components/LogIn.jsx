import React,{useContext, useState} from 'react'
import UserContext from '../context/UserContext'

const LogIn = () => {

    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    const {setUser,numberOFtimesLoggedIn,setnumberOFtimesLoggedIn} = useContext(UserContext)

    const HandleLogIn = (E)=>{
            E.preventDefault()

            setUser(username)
            setnumberOFtimesLoggedIn(20)
    }

  return (
    <div className='h-[100vh] bg-green-300'>
        <h3>Log In</h3>
        <input value={username} onChange={(e)=>setusername(e.target.value)} type="text" placeholder='username' />
        <input value={password} onChange={(e)=>setpassword(e.target.value)} type="password" placeholder='Password' />
        <button onClick={HandleLogIn}>LogIn</button>
        <h1>{numberOFtimesLoggedIn}</h1>
    </div>
  )
}

export default LogIn