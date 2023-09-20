// import { useState } from "react"; 
// import { API } from "../libs/api"; 
// // import { IThreadCard } from "../interfaces/interface"; 
// import { useNavigate, useParams } from "react-router-dom"; 
// // import { useSelector } from "react-redux"; 
// // import { AUTH_CHECK } from "../redux/authSlice"; 
// // import { useHook } from "./useHook"; 
// // import { useDispatch } from "react-redux"; 
// // import { AUTH_CHECK } from "../redux/authSlice"; 
 
// export function useEditProfile() { 
 
//     // const dispatch = useDispatch() 
//     // const { fetchData } = useHook() 
//     //   const [threads, setThread] = useState<IThreadCard[]>() 
 
 
//     //   const fetchData = async () => { 
 
//     //     try { 
//     //       const response = await API.get('/threads', 
//     //         { 
//     //           headers: { 
//     //             Authorization: Bearer ${localStorage.token} 
//     //           } 
//     //         }); 
 
//     //       setThread(response.data); 
 
//     //     } catch (error) { 
//     //       console.error('Error fetching data:', error); 
//     //     } 
//     //   }; 
 
 
//     //   useEffect(() => { 
//     //     fetchData(); 
//     //   }, []); 
 
 
//     const navigate = useNavigate(); 
 
//     const { id } = useParams(); 
 
//     const [dataUsername, setUsername] = useState(""); 
 
//     const [dataName, setName] = useState(""); 
 
//     const [dataDescription, setDescription] = useState(""); 
 
//     const [dataProfilePicture, setDataProfilePicture] = useState<File | null | Blob | string>(null); 
 
//     const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
//         const { value } = event.target; 
//         setUsername(value); 
//     }; 
 
//     const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
//         const { value } = event.target; 
//         setDescription(value); 
//     }; 
 
//     const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
//         const { value } = event.target; 
//         setName(value); 
//     }; 
 
//     const handleProfilePictureChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
 
//         const selectedProfilePicture = event.target.files && event.target.files[0]; 
//         // setDataProfilePicture(URL.createObjectURL(selectedProfilePicture)); 
//         setDataProfilePicture(selectedProfilePicture); 
//     }; 
 
 
//     const fetchUpdateUser = async (event: React.FormEvent) => { 
//         event.preventDefault() 
 
//         const formData = new FormData(); 
//         formData.append('username', dataUsername); 
 
//         formData.append('name', dataName); 
 
//         formData.append('description', dataDescription); 
 
//         if (dataProfilePicture) { 
//             formData.append('profile_picture', dataProfilePicture); 
//         } 
 
//         console.log("ini dataname", dataName); 
 
//         try { 
 
//             const response = await API.put(`/user/${id}`, formData) 
 
 
//             console.log("ini update user bos", response.data); 
 
//             navigate('/'); 
 
 
//         } catch (error) { 
//             console.log("error didye bos", error); 
 
//         } 
 
//     } 
//     return { fetchUpdateUser, handleUsernameChange, handleNameChange, handleDescriptionChange, handleProfilePictureChange } 
 
//     // detail thread 
 
 
 
//     // const numberId = Number(id) 
//     // async function getThread() { 
//     //   try { 
//     //     console.log(id); 
 
//     //     setAuthToken(localStorage.token) 
//     //     const response = await API.get(`/thread/${id}`) 
//     //     // dispatch(AUTH_CHECK(response.data)); 
//     //     setdetaiThread(response.data) 
 
//     //     console.log("ini respo.data", response.data); 
 
//     //   } catch (error) { 
//     //     console.log("error bos detail", error); 
 
//     //   } 
//     // } 
 
//     // useEffect(() => { 
 
//     //   getThread() 
 
//     // }, [id]) 
 
//     // const dispatch = useDispatch(); 
 
//     // const { id } = useParams(); 
//     // const [detaiThread, setdetaiThread] = useState<IThreadCard>() 
 
//     // const getThread = async () => { 
 
//     //   try { 
//     //     console.log(id); 
 
//     //     setAuthToken(localStorage.token) 
 
//     //     const response = await