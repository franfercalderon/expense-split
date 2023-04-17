import { useState } from "react"
import Participant from "../Participant/Participant"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus, faXmark} from '@fortawesome/free-solid-svg-icons'

export default function NewGroupContainer () {

    //STATES
    const [groupName, setGroupName] = useState(null)
    const [participants, setParticipants] = useState(['You'])
    const [newParticipant, setNewParticipant] = useState(null)

    //FUNCTIONS
    const handleAddParticipant = (e) => {

        e.preventDefault()

        //Adds new value to state, keeping existing data
        setParticipants([...participants, newParticipant] )

        //Clears input value
        setNewParticipant('')
    }


    


    return(
        <div className="new-group-container">
            <h3>{!groupName? 'New Group':groupName}</h3>
            <div className="new-group-row">
                <label className="w-100">
                    <input type="text" placeholder="Group Name" onChange={(e)=>setGroupName(e.target.value)} className="new-group-input "/>
                </label>
            </div>
            <h3>Participants</h3>
            <div className="new-group-row">
                <form onSubmit={(e)=>handleAddParticipant(e)}>
                    <label className="w-75">
                        <input type="text" placeholder="Add Participant" onChange={(e)=>setNewParticipant(e.target.value)} className="new-group-input " value={newParticipant}/>
                    </label>
                    {newParticipant&&
                    <button className="add-participant-btn" >
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                    }
                </form>

            </div>
            {participants.map((participant, idx)=>{
                return(
                    <div className="participant-name-div">
                        <p key={idx}>{participant}</p>
                        {participant != 'You' &&
                        <button>
                            <FontAwesomeIcon icon={faXmark}/>
                        </button>
                        }
                    </div>

                    
                )
            })
            }
            
        </div>
    )
}