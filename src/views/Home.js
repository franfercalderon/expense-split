import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import TopBar from '../components/TopBar/TopBar'
import LoginForm from '../components/LoginForm/LoginForm'
import HomeContainer from '../components/HomeContainer/HomeContainer' 

export default function Home () {

    //CONTEXT
    const {appUser} = useContext(AppContext)
    return(
        <>
        {appUser?
            <>
                <TopBar/>
                <HomeContainer/>
            </>
        :
            <LoginForm/>
        }
        </>
    )
}