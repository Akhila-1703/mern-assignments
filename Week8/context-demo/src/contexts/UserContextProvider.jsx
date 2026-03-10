import { useState } from 'react'
import { UserContext } from './UserContext.js'

function UserContextProvider({children}) {
    //state
    const [user, setUser] = useState({name:"ravi",age:20,email:"ravi@mail.com"})
    //function to modify state
    const updatingUser = () => {
        setUser({...user,city:'mbnr'})
    }
    return (
        <UserContext.Provider value={{ user,updatingUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider