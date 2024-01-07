import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {

    //children is the components that is wrapped by this context provider

    const [user,setUser] = useState(null) //This data is shared with all the components that are wrapped by this context provider

    //const user = {username:'admin',password:'admin'} after we pass data from Login
    return (
        //Because we are using createContext inside UserContext we can access .Provider method from UserContext

        //value is the data that we want to share with all the components that are wrapped by this context provider
        <UserContext.Provider value={{user,setUser}}>
            
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;