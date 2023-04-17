import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'



export default function Participant () {

    //STATES
    const [participantName, setParticipantName] = useState(null)
    return(
        <div className="d-flex"> 
            <input type="text" className="rounded-input" placeholder="Add Participant" onChange={(e)=>setParticipantName(e.target.value)}/>
            {participantName &&
                <div className="add-participant-btn">
                    <FontAwesomeIcon icon={faPlus}/>
                </div>
            }
        </div>
    )
}