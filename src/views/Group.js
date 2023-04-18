import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import TopBar from '../components/TopBar/TopBar'
import LoginForm from '../components/LoginForm/LoginForm'
import GroupContainer from '../components/GroupContainer/GroupContainer'

export default function Group () {

    //CONTEXT
    const {appUser} = useContext(AppContext)

    return(
        <>
        {appUser?
            <>
                <TopBar/>
                <GroupContainer/>
            </>
        :
            <LoginForm/>
        }
        </>
    )
}