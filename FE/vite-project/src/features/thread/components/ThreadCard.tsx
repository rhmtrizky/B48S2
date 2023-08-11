import { useState } from 'react';
import {Heading, Text, Image, Button, IconButton, Flex, Avatar, Box, } from "@chakra-ui/react"
// import {FaCommentDots, FaHeart} from "react-icons/fa"
import {BsThreeDotsVertical} from "react-icons/bs"
import {BiChat, BiLike} from "react-icons/bi"
import { Link } from "react-router-dom";
import { Card, CardBody, CardFooter, CardHeader } from '@chakra-ui/react'
import { IThreadCard } from '../../../interfaces/ThreadCard';
// import { ThreadCard } from "./features/thread/component/ThreadCard"



function ThreadCard(props: IThreadCard) {

        // const[threads, setThreads] = useState<ThreadCard[]>()

        // const fetchData = async () => {
        //     try {
        //         const response = await API.get("/thread")
        //         setThreads(response.data)
        //         console.log(response.data)
        //     } catch(error) {
        //         console.error("data ga dapet")
        //     }
        // }
        const [likesCount, setLikesCount] = useState(props.likes_count || 0);
        const [isLiked, setIsLiked] = useState(props.is_liked || false);
    
        const likehandler = () => {
            if (isLiked) {
                setLikesCount(likesCount - 1);
            } else {
                setLikesCount(likesCount + 1);
            }
            setIsLiked(!isLiked);
        }

        // useEffect(() => {
        //     fetchData()
        // }, [])

        const[showImage, setShowImage] = useState<boolean>(true)
    
    return (
        <>
        <Card bgColor="#F2F5F9" mt="5" boxShadow='md'>
            <CardHeader>
                <Flex gap={4}> 
                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                    <Avatar name='Segun Adebayo' src={props.user?.picture} />
                    <Box>
                        <Box display="flex" alignItems="center">
                            <Heading size='sm' mr="2" color="black">{props.user?.full_name}</Heading>
                            <Text color="gray">{props.posted_at} </Text>
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
            {showImage && (
                <Image
                w= "100%" h= "400px" borderRadius= "5px" mb= "10px" objectFit= "cover"
                src={props?.image}
                onError={() => setShowImage(false)}
                alt='Chakra UI'/>
             )}
            <CardFooter
                w="95%"
                justify='space-evenly'
                flexWrap='wrap'
                sx={{
                '& > button': {
                    minW: '136px',
                },
                }}>
                <Button color="#1E2022" onClick={likehandler} variant='ghost' leftIcon={<BiLike style={props.is_liked == true ? {color:"red", marginRight: "5px"} : {color:"gray", mr: "5px"}}/>}>{props.likes_count}Like
                </Button>
                <Link to={'/thread/'+ props.id}>
                    <Button color="#1E2022" flex='1' variant='ghost' leftIcon={<BiChat />}>{props.replies_count}Replies</Button>
                </Link>
            </CardFooter>
        </Card>
        </>
        )
    }

export default ThreadCard