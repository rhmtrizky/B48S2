import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import {Heading, Text, Image, Button, IconButton, Flex, Avatar, Box} from "@chakra-ui/react"
// import {FaCommentDots, FaHeart} from "react-icons/fa"
import {BsThreeDotsVertical} from "react-icons/bs"
import {BiChat, BiLike} from "react-icons/bi"
import { Card, CardBody, CardFooter, CardHeader } from '@chakra-ui/react'
import SimpleSidebar from "../features/thread/components/SimpleSidebar"
import SideRight from "../features/thread/components/SideRight"
import { Grid } from '@chakra-ui/react'
import { Input} from "@chakra-ui/react"
import { BiImageAdd } from "react-icons/bi"
import { IThreadCard } from "../interfaces/ThreadCard"
import {API} from "../lib/api"



export function DetailPage() {
    const[showImage, setShowImage] = useState<boolean>(true)
    const {id} = useParams()
    const [thread, setThread] = useState<IThreadCard | null>(null)
    async function getThread() {
        try {
            const response = await API.get(`/thread/${id}`)
            console.log("test api:", response.data)
            setThread(response.data)
        } catch (error) {
            console.error("error nih", error)
        }
    }
    const [likesCount, setLikesCount] = useState(thread?.likes_count || 0);
    const [isLiked, setIsLiked] = useState(thread?.is_liked || false);
    
        const likehandler = () => {
            if (isLiked) {
                setLikesCount(likesCount - 1);
            } else {
                setLikesCount(likesCount + 1);
            }
            setIsLiked(!isLiked);
        }

    useEffect(() => {
        getThread()
    }, [id])

       
    return thread ?
    <>
    <Grid templateColumns='repeat(3, 1fr)' gap={6}>
    <SimpleSidebar/>
        <Card bgColor="#F2F5F9" mt="5" boxShadow='md'w="500px">
            <Box display="flex" mt="5" alignItems= "center" justifyContent= "space-between" p="0 14px">
                <Avatar mr="2" name='Segun Adebayo' src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFBFT1BMRXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"/>
                <Input borderStyle="none" bgColor="#F0F5F970" color="white" type="text" placeholder="what's happening today?" />
                <BiImageAdd fontSize="30px" color="#1E2022"/>
                <Button w="15%" size="sm" bgColor="#52616B" color="white" borderRadius="20px" ml="2">Post</Button>
            </Box>
            <CardHeader>
                <Flex gap={4}>
                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                    <Avatar name='Segun Adebayo' src={thread.user?.picture} />
                    <Box>
                        <Box display="flex" alignItems="center">
                            <Heading size='sm' mr="2" color="black">{thread.user?.full_name}</Heading>
                            <Text color="gray">{thread.posted_at} </Text>
                        </Box>
                        <Text color="gray">@{thread.user?.username} </Text>
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
                {thread.content}
                </Text>
            </CardBody>
            {showImage && (
                <Image
                w= "100%" h= "400px" borderRadius= "5px" mb= "10px" objectFit= "cover"
                src={thread?.image}
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
                <Button color="#1E2022" onClick={likehandler} variant='ghost' leftIcon={<BiLike style={thread?.is_liked == true ? {color:"red", marginRight: "5px"} : {color:"gray", mr: "5px"}}/>}>
                {likesCount} Like
                </Button>
                <Button color="#1E2022" flex='1' variant='ghost' leftIcon={<BiChat />}>{thread?.replies_count} Replies</Button>
            </CardFooter>
        </Card>
    <SideRight/>
    </Grid>
    </> :
    <>
    <h1>ID tidak ada</h1>
    </>
}