import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'

export default function GroupCard () {
    return(
        <div className="group-card-container rounded-container">
            <div className="group-card-info">
                <h3>{'GroupName'}</h3>
                <p>{'2'} Participants</p>
            </div>
            <div className="group-card-arrow">
                <FontAwesomeIcon icon={faChevronRight}/>
            </div>
        </div>
    )
}