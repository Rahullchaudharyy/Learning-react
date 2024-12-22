import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const {User} = useContext(UserContext)

    if (!User) return <div>Please LogIn</div> ;
  return (
    <div>
        <h1>Hello {User} !!!</h1>
    </div>
  )
}

export default Profile