import {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import Loader from '../Loader/Loader'
import { AppContext } from '../../context/AppContext'

export default function LoginForm () {

    //ROUTER
    const navigate = useNavigate()

    //CONTEXT
    const {userLogin, createUser} = useContext(AppContext)

    //STATES
    const [isLogging, setIsLogging] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    //FUNCTIONS
    //This function runs every time the form is submitted
    const submitHandler = async (e) => {

        //Prevents default behavior avoiding to reload the page
        e.preventDefault()

        //Turns loader on
        setIsLoading(true)

        //Executes function depending on desired action selected by user
        if(isLogging){
            try{
                await userLogin(email, password)
                navigate('/home')

            }catch(err){
                
                //If an error is found, turns loader on and shows styled alert:
                setIsLoading(false)
                Swal.fire({
                    title: 'Oops!',
                    text: err.message,
                    icon: 'warning',
                    confirmButtonText: 'Ok',
                    buttonsStyling: false,
                    customClass:{
                        confirmButton: 'btn btn-primary alert-btn',
                        popup: 'alert-container'
                    }
                })
            }
        } else{
            try{
                await createUser(email, password)
                navigate('/newuser')

            }catch(err){

                //If an error is found, turns loader on and shows styled alert:
                setIsLoading(false)
                Swal.fire({
                    title: 'Oops!',
                    text: err.message,
                    icon: 'warning',
                    confirmButtonText: 'Ok',
                    buttonsStyling: false,
                    customClass:{
                        confirmButton: 'btn btn-primary alert-btn',
                        popup: 'alert-container'
                    }
                })
            }
        }
    }

    return(
        <>
            <div className='login-main-container'>
                {isLoading?
                <Loader/>
                :
                <>
                <h2>ExpenSplit</h2>
                <div className='form-container rounded-container'>
                    <h3>{isLogging? 'Welcome back!': 'Welcome!'}</h3>
                    <form className='w-100 d-flex flex-column align-items-center' onSubmit={submitHandler}>
                        <div className='d-flex flex-column login-group m-2'>
                            <label className='d-flex flex-column '>
                                Email
                                <input type='text' id='email' className='mt-2 rounded-input'placeholder='your@account.com' onChange={(e)=>{setEmail(e.target.value)}}/>
                            </label>
                        </div>
                        <div className='d-flex flex-column login-group'>
                            <label className='d-flex flex-column '>
                                Password
                                <input type='password' id='password' className='mt-2 rounded-input'placeholder='password' onChange={(e)=>{setPassword(e.target.value)}}/>
                            </label>
                        </div>
                        <p onClick={()=>{setIsLogging(!isLogging)}}>{isLogging? 'New to our app? Sign Up.':'Already have an account? Log In.'} </p>
                        <button type='submit' className='login-button btn btn-primary'>{isLogging? 'Log In' : 'Sign Up'}</button>
                    </form>
                </div>
                </>
                }
            </div>
        </>
    )
}