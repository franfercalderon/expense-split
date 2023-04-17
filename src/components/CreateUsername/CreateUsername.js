import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'
// import {doc, setDoc} from 'firebase/firestore'
import { useNavigate } from "react-router-dom"
import { getAuth , updateProfile} from "firebase/auth"
import Swal from "sweetalert2"
import Loader from "../Loader/Loader"

export default function CreateUsername () {

    //FIREBASE AUTH
    const auth = getAuth();

    //ROUTER
    const navigate  = useNavigate()

    //STATES
    const [username, setUsername] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    // const [validUsername, setValidUsername] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)

        updateProfile(auth.currentUser, {displayName: username})
            .then(()=>{
                setIsLoading(false)
                Swal.fire({
                    // title: 'Oops!',
                    text: 'Account Completed',
                    icon: 'success',
                    confirmButtonText: 'Ok',
                    buttonsStyling: false,
                    customClass:{
                        confirmButton: 'btn btn-primary alert-btn',
                        popup: 'alert-container'
                    }
                    
                })
                .then(res=>{
                    if(res.isConfirmed){
                        navigate('/home')
                    }
                })

            })
            .catch(err=>{
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
                
            })
    }

    // const handleInput
    return(
        <>{isLoading?
        <Loader/>
        :
        <div className="new-user-container">
            <h3>Account</h3>
            <form onSubmit={(e)=>handleSubmit(e)} className="d-flex w-100  flex-column">
                <div className="w-100 d-flex justify-content-between">

                    <label className={username && username.length >= 3 ? 'w-75': 'w-100'}>
                        <input className="w-100" type="text" placeholder="Create a username" onChange={(e)=>setUsername(e.target.value)}/>
                    </label>
                    
                    {username && username.length >= 3 &&
                    
                    <div className="checked-sign">
                        <FontAwesomeIcon icon={faCheck} className="checked-sign"/>
                    </div>
                    
                }
                </div>
                {username && username.length >= 3 &&
                <button type= "submit" className="btn btn-light">Save Username</button>
                }
            </form>
            <p>{username && username.length < 3 &&
                'Username must have at least 3 characters'
            }</p>


        </div>
        }
        </>
    )
}