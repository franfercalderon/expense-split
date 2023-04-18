import TopBar from "../components/TopBar/TopBar"
import CreateUsername from "../components/CreateUsername/CreateUsername"
import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import LoginForm from "../components/LoginForm/LoginForm"

export default function NewUser () {

    //CONTEXT
    const {appUser} = useContext(AppContext)

    return(
        <>
        {!appUser?
        <LoginForm/>
        :
        <>
            <TopBar/>
            <CreateUsername/>
        </>
        }
        </>
    )
}