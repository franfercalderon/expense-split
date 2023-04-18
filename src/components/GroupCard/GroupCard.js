import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

export default function GroupCard ({expense}) {
    console.log(expense)

    //CONTEXT
    const {capitalizeWords} = useContext(AppContext)

    return(
        <div className="group-card-container rounded-container">
            <div className="group-card-info">
                <h3>{capitalizeWords(expense.name)}</h3>
                <p>{expense.participants.length} Participants</p>
            </div>
            <div className="group-card-arrow">
                <FontAwesomeIcon icon={faChevronRight}/>
            </div>
        </div>
    )
}