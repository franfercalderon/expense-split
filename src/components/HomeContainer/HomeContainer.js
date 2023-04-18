import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import GroupCard from "../GroupCard/GroupCard"
import {Link} from 'react-router-dom'
import { useEffect, useState, useContext} from 'react'
import { getFirestore, getDocs , collection, query, where} from 'firebase/firestore'
import app from '../../firebase/fb'
import { AppContext } from '../../context/AppContext'
import Loader from '../Loader/Loader'


export default function HomeContainer () {

    //STATES
    const [expenseGroups, setExpenseGroups] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    //CONTEXT
    const {appUser} = useContext(AppContext)

    //FIREBASE
    const db = getFirestore(app)

    //FUNCTIONS


    //EFFECTS
    useEffect(()=>{

        setIsLoading(true)

        //This is executed when the app mounts 
        const getUserGroups = async () => {

            const userId = appUser.uid
            const userGroupsArray = []
    
            const q = query(collection(db, "groups"), where("owner", "==", userId));
            const querySnapshot = await getDocs(q)
            querySnapshot.forEach((doc)=>{
                
                //If there are any coincidences, pushes the results to temporary array
                userGroupsArray.push(doc.data())
            })

            if(userGroupsArray.length > 0){
                
                //Stores array in state 
                setExpenseGroups(userGroupsArray)
            }
            setIsLoading(false)
        }

        //Calls function to get user's groups
        getUserGroups()

    },[appUser, db])

    return(
        <>
        {isLoading?
        <Loader/>
        :
        <div className="home-container">
            {expenseGroups ?
            <>
            {expenseGroups.map((expense, idx)=>{
                return (
                    <Link to={'/group'} className='w-100 d-flex justify-content-center'>
                        <GroupCard key={idx} expense={expense}/>
                    </Link>
                )
            })} 
            </>
            :
            <div>
                <h2 className='no-group-message'>There are no Groups to show</h2>
            </div>
            }
            <Link to={'/newgroup'}>
                <div className="add-btn home-add-btn">
                    <FontAwesomeIcon icon={faPlus}/>
                </div>
            </Link>

        </div>
        }
        </>
    )
}