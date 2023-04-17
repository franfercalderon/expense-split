import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import GroupCard from "../GroupCard/GroupCard"
import {Link} from 'react-router-dom'

export default function HomeContainer () {

    //STATES
    const [expenseGroups, setExpenseGroups] = useState([])

    //FUNCTIONS

    return(
        <div className="home-container">
            <GroupCard/>
            <GroupCard/>
            <GroupCard/>
            <GroupCard/>
            <GroupCard/>
            <GroupCard/>
            <GroupCard/>
            <GroupCard/>
            <GroupCard/>
            <GroupCard/>
            <GroupCard/>
            <GroupCard/>
            <GroupCard/>
            <GroupCard/>
            <GroupCard/>
            <GroupCard/>
            <GroupCard/>
            <GroupCard/>
            <GroupCard/>
            {/* {expenseGroups.length>1?
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
            } */}
            <Link to={'/newgroup'}>
                <div className="add-btn home-add-btn">
                    <FontAwesomeIcon icon={faPlus}/>
                </div>
            </Link>

        </div>
    )
}