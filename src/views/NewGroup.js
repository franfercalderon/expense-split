import NewGroupContainer from "../components/NewGroupContainer/NewGroupContainer";
import TopBar from "../components/TopBar/TopBar";
import { useContext } from "react";
import {AppContext} from "../context/AppContext";
import LoginForm from "../components/LoginForm/LoginForm";

export default function NewGroup () {

    //CONTEXT
    const {appUser} = useContext(AppContext)

    return(
        <>
        {appUser?

            <>
            <TopBar/>
            <NewGroupContainer/>
            </>
        :
            <LoginForm/>
        }
        </>
    )
}