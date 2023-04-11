import { useState } from 'react'
import app from '../../firebase/fb'
import {getFirestore} from 'firebase/firestore'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'

export default function Login () {

    //FIREBASE
    const auth = getAuth(app)

    //Initalize Firestore
    const db = getFirestore(app) 


    //STATES
    const [isLogging, setIsLogging] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    //FUNCTIONS

    //This function runs every time the form is submitted
    const submitHandler = (e) => {
        // console.log(e)

        //Prevents default behavior avoiding to reload the page
        e.preventDefault()

        //Turns loader on
        setIsLoading(true)

        //Gets values from form
        const email = e.target.email.value
        const password = e.target.password.value

        //Executes function depending on desired action selected by user
        isLogging ? userLogin(email, password) : createUser(email, password)

    }

    //Function to create user, getting data from form
    const createUser = (email, password) => {

        createUserWithEmailAndPassword(auth, email, password)
            .then(()=>{
                console.log('usercreated')
            })
            .catch((err)=>{
                console.log(err)
            })
        // console.log(email, password)
    }

    const userLogin = (email, password) => {
        console.log(email, password)
    }


    return(
        <>
            <div className='login-main-container'>
                <h2>ExpenSplit</h2>
                <div className='form-container rounded-container'>
                    <h3>Welcome</h3>
                    <form className='w-100 d-flex flex-column align-items-center' onSubmit={submitHandler}>
                        <div className='d-flex flex-column login-group m-2'>
                            {!isLogging && 
                            
                            <label className='d-flex flex-column '>
                                Username
                                <input type='text' id='username' className='mt-2 rounded-input'placeholder='Benjamin'/>
                            </label>
                            }
                        </div>
                        <div className='d-flex flex-column login-group m-2'>
                            <label className='d-flex flex-column '>
                                Email
                                <input type='text' id='email' className='mt-2 rounded-input'placeholder='your@account.com'/>
                            </label>
                        </div>
                        <div className='d-flex flex-column login-group'>
                            <label className='d-flex flex-column '>
                                Password
                                <input type='password' id='password' className='mt-2 rounded-input'placeholder='password'/>
                            </label>
                        </div>
                        <p onClick={()=>{setIsLogging(!isLogging)}}>{isLogging? 'New to our app? Sign Up.':'Already have an account? Log In.'} </p>
                        <button type='submit' className='login-button btn btn-primary'>{isLogging? 'Log In' : 'Sign Up'}</button>
                    </form>
                </div>
            </div>
        </>
    )
}