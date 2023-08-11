import {useState, useEffect} from 'react'
import { API } from "../lib/api";
import { IThreadCard } from '../interfaces/ThreadCard';

export function useHooks() {

    const[threads, setThreads] = useState<IThreadCard[]>()

        const fetchData = async () => {
            try {
                const response = await API.get("/thread")
                setThreads(response.data)
                console.log(response.data)
            } catch(error) {
                console.error("data ga dapet")
            }
        }

        useEffect(() => {
                fetchData()
            }, [])

    const [formData, setFormData] = useState({
        content: '',
        image: ''
    })

    const createFetchData = async (event: React.FormEvent) => {
        event.preventDefault()
        try {
            const response = await API.post("/thread", formData)
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