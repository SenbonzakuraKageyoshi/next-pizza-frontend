import { useAppSelector } from "../../redux/redux-hooks"
import { user } from "../../redux/selectors"
import { useEffect } from "react"
import Loader from "../Loader/Loader"

interface IAuthProtectProps {
    children: React.ReactNode
};

const AuthProtect = ({ children }: IAuthProtectProps) => {

    const userData = useAppSelector(user);

    useEffect(() => {
        if(!userData.data && userData.status === 'idle' || userData.status === 'rejected'){
            window.location.href = '/'
        }
    }, [userData.data])

    if(userData.data && userData.status === 'fulfilled'){
        return children
    }else{
        return <Loader />
    }
}

export default AuthProtect;