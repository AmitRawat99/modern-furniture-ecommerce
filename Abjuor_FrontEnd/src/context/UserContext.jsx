import React, { createContext, useState, useEffect } from 'react'

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [User, setUser] = useState(null)

    useEffect(() => {
        const storeData = localStorage.getItem("UserData")
        if (storeData) {
            setUser(JSON.parse(storeData))
        }
    }, [])

    const removeUser = () =>{
        localStorage.removeItem("UserData")
        setUser(null)
    }
    
    return (
        <>
            <UserContext.Provider value={{ User, setUser , removeUser }}>
                {children}
            </UserContext.Provider>
        </>
    )
}


export default UserContext