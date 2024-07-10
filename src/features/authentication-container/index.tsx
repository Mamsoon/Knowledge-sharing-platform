import { useState } from "react";
import Authentication from "../../components/authentication";

const AuthenticationContainer = () => {
    const [authState,setAuthState] = useState({
        mailId: '',
        password: ''
    })
    const [process,setProcess] = useState<string>('')
    const handleAuthActions = (label:string,event:any) => {
        console.log(label,event)
        setAuthState((prevValue) => ({
            ...prevValue,
            mailId: label === 'email' && event.target.value,
            password: label === 'password' && event.target.value
        }))
    }
    return(
        <Authentication
        {...{handleAuthActions,setAuthState,authState,process,setProcess}}
         />
    )
}
export default AuthenticationContainer;