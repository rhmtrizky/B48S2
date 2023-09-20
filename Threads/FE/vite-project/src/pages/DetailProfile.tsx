'use client'

import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  // useColorModeValue,
  Grid,
  Card,
  CardHeader,
  IconButton,
  CardBody,
  CardFooter,
} from '@chakra-ui/react'
import SimpleSidebar from '../features/thread/components/SimpleSidebar'
import { MdVerified } from 'react-icons/Md';
import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { RootState } from '../stores/types/rootState';
// import ThreadCard from '../features/thread/components/ThreadCard';
import { useDispatch } from 'react-redux';
import { GET_THREADS } from '../stores/RootReducer';
import { useState, useEffect } from 'react';
import { IThreadCard } from '../interfaces/ThreadCard';
import { API } from '../lib/api';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { BiChat, BiLike, BiShare } from 'react-icons/bi';
import { useLike } from '../hooks/useLike';
import moment from 'moment';



export default function DetailProfile() {
  // const navigate = useNavigate()
  const[threads, setThreads] = useState<IThreadCard[]>()
  const dispatch = useDispatch()
  const fetchDataByIdUser = async () => {
    try {
        const response = await API.get('/threads/profile')
        setThreads(response.data);
        dispatch(GET_THREADS({
            threads: response.data
        }))
        // const item = response.data
        // console.log('Fetched threads WOIIII:', response.data)
    } catch (error) {
        console.error('Error fetching data:', error)
    }
}

useEffect(() => {
    fetchDataByIdUser()
}, [])


  const {handleLikePost} = useLike()
  const[showImage, setShowImage] = useState<boolean>(true)
  const auth = useSelector((state: RootState) => state.auth)
  return (
  <>
  <Grid templateColumns='repeat(2, 1fr)' gap={6}>
    <div><SimpleSidebar/></div>
    <div>
    <Center py={6}>
      <Box
        w={'900px'}
        mr={'27px'}
        bgColor={"#F2F5F9"}
        boxShadow='md'
        border={'1px solid #a3ced1'}
        rounded={'md'}
        overflow={'hidden'}
        justifyContent={"start"}
        alignItems={"start"}>
        <Image
          h={'180px'}
          w={'full'}
          src={
            'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
          }
          objectFit="cover"
          alt="#"
        />
        <Flex justify={'start'} mt={'-100px'} ml={10}>
          <Avatar
            w={'220px'}
            h={'220px'}
            src={
              auth.picture
            }
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>
        <Stack spacing={1} align={'start'} mt={'-110px'} ml={'270px'} direction={'column'}>
            <Box display="flex" alignItems="center" fontSize={25}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                {auth.full_name} 
              </Heading>
              <MdVerified color={'blue'}/>
            </Box>
            <Text color={'gray.500'}>@{auth.username}</Text>
            <Text color={'gray.900'}>"{auth.description}"</Text>
            <Stack direction={'row'} alignItems={'center'} display={'flex'} justifyContent={'center'} mt={2}>
              <Text fontWeight={600} fontSize={'md'}>23k</Text>
              <Text fontSize={'md'} color={'gray.500'}>
                Followers
              </Text>
              <Text fontWeight={600} fontSize={'md'}>23k</Text>
              <Text fontSize={'md'} color={'gray.500'}>
                Followers
              </Text>
            </Stack>
            </Stack>

        <Box p={3} display={'flex'} w={'100%'} justifyContent={'space-between'} alignItems={'center'}>
          <Button
            margin={5}
            w={'50%'}
            mt={8}
            bg={'blue.500'}
            color={'white'}
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
              bgColor: '#F2F5F9',
              border:'1px solid black',
              color: 'black'
            }}>
            Follow
          </Button>
          <Button
            margin={5}
            w={'50%'}
            mt={8}
            bg={'green.500'}
            color={'white'}
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
              bgColor: '#F2F5F9',
              border:'1px solid black',
              color: 'black'
            }}>
            Unfollow
          </Button>
        </Box>
      </Box>
    </Center>
    {threads && threads.map((thread) => (
    <Card
        w={'900px'}
        mr={'27px'}
        key={thread.id}
        bgColor="#F2F5F9"
        mt={0}
        boxShadow='md'
        border={'1px solid #a3ced1'}>
        <CardHeader>
            <Flex gap={4}>
                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                    <Avatar name='Segun Adebayo' src={thread.user?.picture} />
                    <Box>
                        <Box display="flex" alignItems="center">
                            <Heading size='sm' mr="2" color="black">
                                {thread.user?.full_name}
                            </Heading>
                            <Text color="gray">
                                {moment(thread.posted_at).startOf("minute").fromNow()} 
                            </Text>
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
        <Link to={'/thread/'+ thread.id}>
            {showImage && (
                <Image
                    w= "100%" h= "400px" borderRadius= "2px" mb= "10px" objectFit= "cover"
                    src={thread.image}
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
                color="#1E2022"
                variant='ghost'
                onClick={() => handleLikePost(thread.id, thread.is_liked)}
                leftIcon={<BiLike style={thread.is_liked ? { color: "red" } : { color: "black" }}/>}>
                {thread.likes_count} Likes
                </Button>
            <Link to={'/thread/'+ thread.id}>
                <Button color="#1E2022" variant='ghost' leftIcon={<BiChat />}>
                    {thread?.replies_count} Replies
                </Button>
            </Link>
            <Link to={'/thread/update/'+ thread.id}>
                <Button cursor={'pointer'} color="#1E2022" variant='ghost' leftIcon={<BiShare/>}>
                    Share
                </Button>
            </Link>
        </CardFooter>
    </Card>
    ))}
    </div>
  </Grid>
  </>
  )
}