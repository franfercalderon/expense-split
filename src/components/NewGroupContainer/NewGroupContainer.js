import { useState, useContext, useEffect} from "react"
import { AppContext } from "../../context/AppContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus, faXmark} from '@fortawesome/free-solid-svg-icons'
import Loader from "../Loader/Loader"
import { getFirestore, setDoc, doc } from "firebase/firestore"
import app from "../../firebase/fb"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';



export default function NewGroupContainer () {

    //FIRESTORE
    const db = getFirestore(app)

    //ROUTER
    const navigate = useNavigate()

    //STATES
    const [groupName, setGroupName] = useState(null)
    const [participants, setParticipants] = useState([])
    const [newParticipant, setNewParticipant] = useState(null)
    const [inputValue, setInputValue] = useState('')
    const [warningMessage, setWarningMessage] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    //CONTEXT
    const {appUser, capitalizeWords} = useContext(AppContext)

    //FUNCTIONS
    const handleAddParticipant = (e) => {

        //Prevents the page to reload when form is submitted
        e.preventDefault()

        //Adds new value to state, keeping existing data
        setParticipants([...participants, newParticipant] )

        //Clears input value
        setInputValue('')
    }

    const deleteParticipant = (name) => {
        //Filters participant array and returns a new array excluding the selected name
        const filteredArray = participants.filter(participant => participant!==name.toLowerCase())

        //Updates state
        setParticipants(filteredArray)
    }

    const createGroup = async () => {

        //Shows Loader
        setIsLoading(true)

        const newGroup = {
            id: uuidv4(),
            owner: appUser.uid,
            name: groupName,
            participants,
            activity:[]
        }

        await setDoc(doc(db, 'groups', groupName), newGroup)
        setIsLoading(false)
        navigate('/home')
    }


    //EFFECTS
    useEffect(()=>{

        //Will set the current user as the first member of the group, once the component mounts (and if appUser is updated too)
        setParticipants([appUser.displayName])

    },[appUser])

    useEffect(()=>{

        //When input for new Participant is not null, will call this function.
        const handleNewParticipant = () =>{

            //Checks minimum length, if is not enough it shows a warning message
            if(inputValue.length>=3){

                //Checks that the name is unique
                if(participants.includes(inputValue.toLowerCase())){
                    //If the name is in the participants array, shows warning
                    setNewParticipant(null)
                    setWarningMessage('Name already in use')
                }
                else{
                    //If the name is not used yet, clears warning message and stores the value in the a state
                    setWarningMessage('')
                    setNewParticipant(inputValue.toLowerCase())
                }
            }
            else{
                setWarningMessage('Name must have at least 3 characters')
                setNewParticipant(null)
            }
        }

        if(inputValue){

            handleNewParticipant()
        }
        else{
            setNewParticipant(null)
            setWarningMessage('')
        }


    }, [inputValue, participants])

    return(
        <>
        {isLoading?
        <Loader/>
        :
        <>
        <div className="new-group-container">
            <div className="w-100">
                <FontAwesomeIcon icon={faXmark} className="close-window" onClick={()=>{navigate('/home')}}/>
            </div>
            <h3 className="mt-5">{!groupName? 'New Group':groupName}</h3>
            <div className="new-group-row">
                <label className="w-100">
                    <input type="text" placeholder="Group Name" onChange={(e)=>setGroupName(e.target.value)} className="new-group-input "/>
                </label>
            </div>
            <h3>Participants</h3>
            <ul className="participant-name-ul">
            {participants.map((participant, idx)=>{
                return(
                    <li key={idx} className='d-flex justify-content-between align-items-center'>
                        <p  className='participant-item'>{participant=== appUser.displayName? `${capitalizeWords(participant)} (you)`: capitalizeWords(participant)}</p>
                        {participant !== appUser.displayName &&
                        <button className="remove participant-btn" onClick={()=>deleteParticipant(participant)}>
                            <FontAwesomeIcon icon={faXmark}/>
                        </button>
                        }
                    </li>
            )
            })
            }
            </ul>
            <div className="new-group-row ">
                <form onSubmit={(e)=>handleAddParticipant(e)} className='d-flex justify-content-between'>
                    <label className={newParticipant?'w-75': 'w-100'}>
                        <input type="text" placeholder="Add Participant" onChange={(e)=>setInputValue(e.target.value)} className="new-group-input " value={inputValue}/>
                    </label>
                    {newParticipant&&
                    <button className="add participant-btn" >
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                    }
                </form>
            </div>
            <p className="warning-tag">
            {warningMessage}
            </p>
            {groupName && participants.length>1 &&
            <button className="btn btn-light w-100 mt-4" onClick={()=>createGroup()}>Create Group</button>
            }
        </div>
        </>
        }
        </>
    )
}