import React, { useState } from 'react'
import UserContext from './UserContext.js'

const UserContextProvider = ({children}) => {
    
const [User, setUser] = useState(null)
const [numberOFtimesLoggedIn, setnumberOFtimesLoggedIn] = useState(0)

  return (
    <UserContext.Provider value={{User,setUser,numberOFtimesLoggedIn,setnumberOFtimesLoggedIn}} >
    {children }
    </UserContext.Provider>
  )
}

export default UserContextProvider


// Experiment this 
// Apart from the children when you write anything else it would not work see just check it out .