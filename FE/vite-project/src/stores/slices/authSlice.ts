import { IUser } from "../../interfaces/User";
import { createSlice } from '@reduxjs/toolkit'

const initialAuthState: IUser = {
    id: 0,
    username: "",
    full_name: "", 
    password: "",
    picture: "",
} 

export const authSlice = createSlice({
    name: "auth",
    initialState: initialAuthState,
    reducers: {
        AUTH_LOGIN: (_, action) => {
            const payload = action.payload
            console.log("ini login payload bro:", payload)
            localStorage.setItem("token", payload.token)

            const user: IUser = {
                id: payload.user.id,
                username: payload.user.username,
                full_name: payload.user.full_name,
                password: payload.user.password,
                picture: payload.user.picture,
            }
            return user
        },
        AUTH_CHECK: (_, action) => {
            const payload = action.payload
            console.log("ini check payload bro:", payload)

            const user: IUser = {
                id: payload.user.id,
                username: payload.user.username,
                full_name: payload.user.full_name,
                password: payload.user.password,
                picture: payload.user.picture,
            }
            return user
        },
        AUTH_ERROR: (state) => {

        },
        AUTH_LOGOUT: (state, action) => {

        }
    }

     
})

