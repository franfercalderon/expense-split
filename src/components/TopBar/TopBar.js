import { useContext } from "react"
import { AppContext } from "../../context/AppContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons'
export default function TopBar () {

    //CONTEXT
    const {logOut} = useContext(AppContext)
    return(
        <div className="topbar-container">
            <h2>ExpenSplit</h2>
            <div onClick={logOut} className="logout-btn"><FontAwesomeIcon icon={faArrowRightFromBracket}/></div>
        </div>
    )
}