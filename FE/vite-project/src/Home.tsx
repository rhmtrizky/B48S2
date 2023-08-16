// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import ThreadCard from "./features/thread/components/ThreadCard"
import SimpleSidebar from "./features/thread/components/SimpleSidebar"
import SideRight from "./features/thread/components/SideRight"
import { Grid } from '@chakra-ui/react'
import {Box, Button, Avatar, Input} from "@chakra-ui/react"
import { BiImageAdd } from "react-icons/bi"
import { useHooks } from "./hooks/useHooks"

function Home() {
  const {threads,handleChange, createFetchData , formData} = useHooks()
  return (
    <>
    <Grid templateColumns='repeat(3, 1fr)' gap={6}> 
      <div><SimpleSidebar/></div>
      <div>
      <Box w="500px">
        <form action=""onSubmit={createFetchData}>
        <Box display="flex" mt="5" alignItems= "center" justifyContent= "space-between" p="0 14px">
          <Avatar mr="2" name='Segun Adebayo' src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFBFT1BMRXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"/>
          <Box display={"flex"} flexDirection={"column"} >
            <Input name='content' borderStyle="none" bgColor="#F0F5F970" color="black" onChange={handleChange} value={formData.content} type="text" placeholder="what's happening today?" />
            <Input name='image' borderStyle="none" bgColor="#F0F5F970" color="black" onChange={handleChange} value={formData.image} type="text" placeholder="your favorite image"/>
          </Box>
          <BiImageAdd fontSize="30px" color="#1E2022"/>
          <Button type="submit" w="15%" size="sm" bgColor="#52616B" color="white" borderRadius="20px" ml="2">Post</Button>
        </Box>
        </form>
        {threads?.map((item, index) => {
          return (
            <ThreadCard key={index} content={item.content} image={item.image} id={item.id} likes_count={item.likes_count} user={item.user} posted_at={item.posted_at}/>
          )
        })}
      </Box>
      </div>
      <div><SideRight/></div>
    </Grid>
    </>
    )
  }
export default Home
