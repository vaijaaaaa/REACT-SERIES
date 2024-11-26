import React, { useState } from 'react'
import UserContext from './UserContext'


const UserContextProvider = ({children}) => {
    const [user,setuser] = useState(null)
    return(
        <UserContextProvider value={{user,setuser}}>
            {children}
        </UserContextProvider>
    )



}



export default UserContextProvider