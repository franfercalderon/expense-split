import Dashboard from '../components/Dashboard/Dashboard'
import Login from '../components/Login/Login'
import { useContext } from 'react'
import {AppContext} from '../context/AppContext'



export default function Home () {

    //CONTEXT
    const {appUser} = useContext(AppContext)
    console.log(appUser)
    return(
        <>
            <Login/>
        </>
    )
}