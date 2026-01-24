import React, { useState } from 'react'
import Context from './Context'
import User from '../../../Router-tutorial/src/components/User';


const Contextprovider = ({children}) => {

    const [User, setUser] = useState(null)
    return (
      
        <Context.Provider value={{ User, setUser }}>
            {children}
        </Context.Provider>
    )
}

export default Contextprovider