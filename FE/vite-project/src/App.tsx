import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import {DetailPage} from "./pages/DetailPage"


export default function App() {
    return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/> 
                    <Route path='/home/' element={<Home/>}/>
                    <Route path='/thread/:id' element={<DetailPage/>}/>
            </Routes>
        </BrowserRouter>
    </>
    )
}
{/* <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}> 
      <div><SimpleSidebar/></div>
      <div>
      <Box>
        <Box display="flex" mt="5" alignItems= "center" justifyContent= "space-between" p="0 14px">
          <Avatar mr="2" name='Segun Adebayo' src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFBFT1BMRXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"/>
          <Input borderStyle="none" bgColor="#F0F5F970" color="white" type="text" placeholder="what's happening today?" />
          <BiImageAdd fontSize="30px" color="#1E2022"/>
          <Button w="15%" size="sm" bgColor="#52616B" color="white" borderRadius="20px" ml="2">Post</Button>
        </Box>
        <ThreadCard/>
      </Box>
      </div>
      <div><SideRight/></div>
    </SimpleGrid> */}