import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'


export default function HomeContainer () {

    //STATES
    const [expenseGroups, setExpenseGroups] = useState([])

    //FUNCTIONS

    return(
        <div className="home-container">
            {expenseGroups.length>1?
                <>
                {expenseGroups.map((group, idx)=>{
                    return(
                        <p>{group.name}</p>
                    )
                })}
                </>
            :
            <div>
                <p>There are no exp</p>
            </div>
            }
            <div className="add-btn home-add-btn">
                <FontAwesomeIcon icon={faPlus}/>
            </div>

        </div>
    )
}