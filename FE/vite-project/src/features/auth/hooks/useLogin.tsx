import { useNavigate } from "react-router-dom"
import { API} from "../../../lib/api"
import { ChangeEvent, useState} from 'react'
import { IUserLogin } from "../../../interfaces/User"
import { AUTH_LOGIN } from "../../../stores/RootReducer"
import { useDispatch } from "react-redux"


export function useLogin() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [formData, setFormData] = useState<IUserLogin>({
        email: '',
        password: '',
    })

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    async function handleLogin(event: ChangeEvent<HTMLInputElement>) {
        event.preventDefault
        try {
            const response = await API.post('/login', formData)
            dispatch(AUTH_LOGIN(response.data))
            // console.log("login berhasil nih", response)
            // localStorage.setItem("token", response.data.token)
            navigate('/')
        } catch (error) {
            console.log("data login ga dapet", error)
        }
        
    }
    
    return {handleChange, handleLogin}
}