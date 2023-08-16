import {useState, useEffect} from 'react'
import { API } from "../lib/api";
import { IThreadCard } from '../interfaces/ThreadCard';

export function useHooks() {

    const[threads, setThreads] = useState<IThreadCard[]>()

        const fetchData = async () => {
            try {
                const response = await API.get("/threads", { 
                    headers: {
                        Authorization: `Bearer ${localStorage.token}`
                    }
                })
                
                setThreads(response.data)
                console.log(response.data)
            } catch(error) {
                console.error("data ga dapet", error)
            }
        }

        useEffect(() => {
            fetchData()
        }, [])

    const [formData, setFormData] = useState({
        content: '',
        image: ''
    })

    const createFetchData = async (event: React.FormEvent, identifier: string) => {
        event.preventDefault()
        const loginSession = localStorage.getItem('loginSession');
        try {
            const response = await API.post("/threads", {
                where: {
                    [identifier]: loginSession
                },
                content: formData.content,
                image: formData.image
            });
            fetchData()
            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        console.log(name)

        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    return {threads, setThreads, handleChange, createFetchData , formData, setFormData}
}