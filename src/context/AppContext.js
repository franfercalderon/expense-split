import { useState, createContext, useEffect, } from "react"
import { getFirestore } from "firebase/firestore"
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import app from '../firebase/fb'

const AppContext = createContext()
const {Provider} = AppContext


//Initialize Cloud Firestore and get reference to the service
const db = getFirestore(app)

//Initialize firebase DB
const auth = getAuth(app)

const AppProvider = ({children}) => {
    
    //STATES
    const [appUser, setAppUser] = useState(null)

    //EFFECTS
    useEffect(() => {

    },[])

    return(
        <Provider
            value={{
                appUser
            }}
        >
            {children}
        </Provider>
    )
}

export {AppContext, AppProvider}
