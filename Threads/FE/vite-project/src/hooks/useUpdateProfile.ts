import { useState } from "react";
import { API } from "../lib/api";
import { useNavigate, useParams } from "react-router-dom";
// import { useHooks } from "./useHooks";

export function useUpdateProfile() {

    const navigate = useNavigate(); 
    const { id } = useParams();  
    // const {handlePreviewImage} = useHooks(); 

    const [dataUsername, setUsername] = useState(""); 
    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
        const { value } = event.target; 
        setUsername(value); 
    }; 

    const [dataDescription, setDescription] = useState("");
    const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
        const { value } = event.target; 
        setDescription(value); 
    }; 

    const [dataName, setName] = useState(""); 
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
        const { value } = event.target; 
        setName(value); 
    }; 

    // const [dataProfilePicture, setDataProfilePicture] = useState<File | null | Blob | string>(null); 
    // const handleProfilePictureChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
    //     const selectedProfilePicture = event.target.files && event.target.files[0]; 
    //     setDataProfilePicture(selectedProfilePicture); 
    //     handlePreviewImage(event)
        
    // }; 

    const fetchUpdateUser = async (event: React.FormEvent) => { 
        event.preventDefault() 

        const formData = new FormData()
        formData.append('username', dataUsername)
        formData.append('full_name', dataName) 
        formData.append('description', dataDescription) 
        // if (dataProfilePicture) { 
        //     formData.append('profile_picture', dataProfilePicture) 
        // } 
        console.log("ini form data", formData); 
        console.log("ini dataname", dataName); 
        console.log("ini dataUserName", dataUsername); 
        // console.log("ini dataProfilePicture", dataProfilePicture); 
        console.log("ini dataDescription", dataDescription); 
        

        try { 
            const response = await API.patch(`/editProfile/${id}`, formData) 
            console.log("ini update user bos", response.data); 
            navigate('/'); 
        } catch (error) { 
            console.log("error bos", error); 

    } 

} 
return { fetchUpdateUser, handleUsernameChange, handleNameChange, handleDescriptionChange} 
}
