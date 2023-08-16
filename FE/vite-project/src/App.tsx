import {  Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Home from "./Home";
// import { DetailPage } from "./pages/DetailPage";
import LoginForm from "./features/auth/LoginForm";
import RegisterForm from "./features/auth/RegisterForm";
import { useEffect, useState } from "react";
import { API, setAuthToken } from "./lib/api";
// import ThreadCard from "./features/thread/components/ThreadCard";
import Loading from "./features/thread/components/Loading";
import { DetailPage } from "./pages/DetailPage";
import { useDispatch } from "react-redux";
import { AUTH_CHECK } from "./stores/RootReducer";


export default function App() {
    const [isLoading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const dispatch = useDispatch()

    async function authCheck() {
        try {
            setAuthToken(localStorage.token);
            const response = await API.get("/check");
            dispatch(AUTH_CHECK(response.data.user))
            // console.log("berhasil login", response);
            setLoading(false);
        } catch (error) {
            localStorage.removeItem('token')
            setLoading(false);
            navigate("/login");
            console.log("login gagal", error);
        }
    }

    useEffect(() => {
        if (localStorage.token) {
          authCheck();
        } else {
          setLoading(false)
        }
            
    }, []);

    return (
        <div>
            {isLoading ? <Loading/> : (
              <Routes>
                <Route path="/" element={localStorage.token ? <Home/> : <Navigate to="/login"/>} />
                <Route path="/register/" element={!localStorage.token ? <RegisterForm /> : <Navigate to="/register"/>} />
                <Route path="/login/" element={!localStorage.token ?<LoginForm/> : <Navigate to="/"/> }/>
                <Route path="/thread/:id" element={<DetailPage/>}/>
          </Routes>
            )}
        </div>
    );
}
