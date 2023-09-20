import { useState } from 'react';
import {Heading, Text, Image, Button, IconButton, Flex, Avatar, Box, } from "@chakra-ui/react"
// import {FaCommentDots, FaHeart} from "react-icons/fa"
import {BsThreeDotsVertical} from "react-icons/bs"
import {BiChat, BiLike, BiShare} from "react-icons/bi"
// import {AiOutlineEdit} from "react-icons/ai"
// import {FaHeart} from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom";
import { Card, CardBody, CardFooter, CardHeader } from '@chakra-ui/react'
import { IThreadCard } from '../../../interfaces/ThreadCard'
import { useLike } from '../../../hooks/useLike'
import moment from 'moment'

// import { ThreadCard } from "./features/thread/component/ThreadCard"



function ThreadCard(props: IThreadCard) {

        // const[threads, setThreads] = useState<IThreadCard[]>()

        // const fetchData = async () => {
        //     try {
        //         const response = await API.get("/thread")
        //         setThreads(response.data)
        //         console.log(response.data)
        //     } catch(error) {
        //         console.error("data ga dapet")
        //     }
        // }
        // const navigate = useNavigate()


        // const [likesCount, setLikesCount] = useState(props.likes_count || 0);
        // const [isLiked, setIsLiked] = useState(props.is_liked || false);
    
        // const likehandler = () => {
        //     if (isLiked) {
        //         setLikesCount(likesCount - 1);
        //     } else {
        //         setLikesCount(likesCount + 1);
        //     }
        //     setIsLiked(!isLiked);
        // }

        // useEffect(() => {
        //     fetchData()
        // }, [])
        let replyName = ""
        if (props.replies_count > 1) {
            replyName = "Replies"
        } else {
            replyName = "Reply"
        }

        let likeName = ""
        if (props.likes_count > 1) {
            likeName = "Likes"
        } else {
            likeName = "Like"
        }
        const navigate = useNavigate()
        const {handleLikePost} = useLike()
        const[showImage, setShowImage] = useState<boolean>(true)
    
    return (
        <>
        <Card bgColor="#F2F5F9" mt="5" boxShadow='md' border={'1px solid #a3ced1'}>
            <CardHeader>
                <Flex gap={4}> 
                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                    <Avatar onClick={() => navigate('/profile/'+ props.user.id)} name='Segun Adebayo' src={props.user?.picture} />
                    <Box>
                        <Box display="flex" alignItems="center">
                            <Heading size='sm' mr="2" color="black">{props.user?.full_name}</Heading>
                            <Text color="gray">{moment(props.posted_at).startOf("minute").fromNow()} </Text>
                        </Box>
                        <Text color="gray">@{props.user?.username} </Text>
                    </Box>
                </Flex>
                <IconButton
                    variant='ghost'
                    colorScheme='gray'
                    aria-label='See menu'
                    icon={<BsThreeDotsVertical color="black"/>}/>
                </Flex>
            </CardHeader>
            <CardBody>
                <Text color="black">
                {props.content}
                </Text>
            </CardBody>
            <Link to={'/thread/'+ props.id}>
            {showImage && (
            <Image
            w= "100%" h= "400px" borderRadius= "2px" mb= "10px" objectFit= "cover"
            src={props?.image}
            onError={() => setShowImage(false)}
            alt='Chakra UI'/>
             )}
            </Link>
            <CardFooter
                w="95%"
                justify='space-around'
                flexWrap='wrap'
                sx={{
                '& > button': {
                    minW: '136px',
                },
                }}>
                <Button
                color="#1E2022" variant='ghost'onClick={() => handleLikePost(props.id, props.is_liked)} leftIcon={<BiLike
                 style={props.is_liked ? {color:"red"} : {color:"black"}} />}>{props.likes_count} {likeName}
                </Button>
                <Link to={'/thread/'+ props.id}>
                    <Button color="#1E2022" variant='ghost' leftIcon={<BiChat />}>{props?.replies_count} {replyName}</Button>
                </Link>
                <Link to={'/thread/update/'+ props.id}>
                <Button cursor={'pointer'} color="#1E2022" variant='ghost' leftIcon={<BiShare/>}>Share</Button>
                </Link>
            </CardFooter>
        </Card>
        </>
        )
    }

export default ThreadCard