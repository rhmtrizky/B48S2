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
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { RootState } from '../stores/types/rootState';
// import ThreadCard from '../features/thread/components/ThreadCard';
import { useDispatch } from 'react-redux';
import { GET_THREADS } from '../stores/RootReducer';
import { useState, useEffect } from 'react';
// import { IThreadCard } from '../interfaces/ThreadCard';
import { API } from '../lib/api';
// import { BsThreeDotsVertical } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
// import { BiChat, BiLike, BiShare } from 'react-icons/bi';
// import { useLike } from '../hooks/useLike';
// import moment from 'moment';
import { IUser } from '../interfaces/User';
// import { isDate } from 'date-fns';
import { useSelector } from 'react-redux';
import { RootState } from '../stores/types/rootState';
import ThreadCard from '../features/thread/components/ThreadCard';



export default function DetailProfileById() {
  // const navigate = useNavigate()
  const threads = useSelector((state: RootState) => state.thread)
  const dispatch = useDispatch()
  const[user, setUser] = useState<IUser>()
  const {id} = useParams()
  const DetailProfileByThread = async () => {
    try {
        const response = await API.get(`/profile/${id}`)
        setUser(response.data);
        dispatch(GET_THREADS({
            threads: response.data.threads
        }))
        console.log("ini isi threads broo:", response.data.threads)

    } catch (error) {
        console.error('Error fetching data:', error)
    }
}
// console.log("ini isi threads broo:", response.data.threads)
useEffect(() => {
  DetailProfileByThread()
}, [id])


  // const {handleLikePost} = useLike()
  // const[showImage, setShowImage] = useState<boolean>(true)
  // const auth = useSelector((state: RootState) => state.auth)
  return user ? (
  <>
 <Grid templateColumns='repeat(2, 1fr)' gap={6}>
    <div><SimpleSidebar/></div>
    <div>
    <div key={user.id}></div>
    <Center>
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
              user.picture
            }
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>
        <Stack spacing={1} align={'start'} mt={'-110px'} ml={'270px'} direction={'column'}>
            <Box display="flex" alignItems="center" fontSize={25}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                {user.full_name} 
              </Heading>
              <MdVerified color={'blue'}/>
            </Box>
            <Text color={'gray.500'}>@{user.username}</Text>
            <Text color={'gray.900'}>"{user.description}"</Text>
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
    <Box w={'97%'}>
    {threads?.map((item, index) => {
      if(user.id === item.user.id)
        return (
          <ThreadCard
          key={index}
          replies_count={item.replies_count}
          content={item.content} image={item.image}
          id={item.id}
          likes_count={item.likes_count}
          user={item.user}
          is_liked={item.is_liked}
          posted_at={item.posted_at}/>
        )
        })}
      </Box>
    </div>
  </Grid>


  </>
  ) :
  ( null )
}