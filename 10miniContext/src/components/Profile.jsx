// To recieve and use data

import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)

    
    if(!user){  //If user not found
        return(
            <div>
                Please Login
            </div>
        )
    }


    else{
        return (
            <div>Welcome {user.userName}</div>
        )
    }
}

export default Profile