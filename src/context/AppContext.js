import { createContext, useState , useEffect} from "react";
import app from '../firebase/fb'
import { getAuth, onAuthStateChanged , createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth';

const AppContext = createContext()

const {Provider} = AppContext

//Initalize Firebase
const auth = getAuth(app)

const AppProvider = ({children}) => {
    
    //STATES
    const [appUser, setAppUser] = useState(null)

    //FUNCTIONS
    const createUser = (email, password) => {

        //Calls Firebase function to sign in 
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const userLogin = (email, password) => {

        //Calls Firebase function to sign in 
        return signInWithEmailAndPassword(auth, email, password)
     }

    const logOut = () =>{

        //Sign out using Firebase function
        signOut(auth)
    }

    const capitalizeWords = (string) =>{
        return(
            string
                .toLowerCase()
                .split(' ')
                .map((word)=>word.charAt(0).toUpperCase()+word.slice(1))
                .join(' ')
        )
    }


    useEffect(()=>{

        //Firebase auth listener
        const unsuscribe = onAuthStateChanged(auth, (currentUser)=>{

            setAppUser(currentUser)
            
            return () => {unsuscribe()}
        })
        
    },[])
    

    
    return(

        <Provider value={{
            appUser,
            logOut,
            userLogin,
            createUser,
            capitalizeWords
        }}>
            {children}
        </Provider>
    )


}

export {AppContext, AppProvider}