
// import {Box, Heading, Button, Container, Image, Text} from "@chakra-ui/react"


// export default function SideRight() {
//     return (
//       <>
//         <Box display="flex" flexDirection="column" padding="30px" w="410px">
//         <Container bgColor="#dfe9f0" padding="15px" h= "290px" borderRadius={10}>
//           <Heading as='h5' size='sm' color="black" paddingLeft="15px">
//             Profile
//           </Heading>
//           <Container>
//             <Box w='100%' h='80px' bgGradient='linear(to-r, green.400, pink.900)'mt="20px" borderRadius={20}/>
//             <Image w="70px" h="70px" mt="-40px" ml="20px" border="4px solid #dfe9f0" borderRadius="50%"src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fFBFT1BMRXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" />
//             <Heading as='h5' size='sm' color="black" mb="5px">
//               Rahmat Rizky Rifai
//             </Heading>
//             <Text color="grey" fontSize="11px" mb="3px">@rhmtrizky_</Text>
//             <Text color="black" fontSize="12px" mb="3px">muda berkarya, tua berjaya, mati masuk surga</Text>
//             <Box fontSize="12px" display="flex" color="grey" justifyContent="space-between" w="55%">
//               <Text display="flex" w="43%" justifyContent="space-between"><p style={{fontWeight: "bold", color: "black"}}>39 </p>Following </Text>
//               <Text display="flex" w="47%" justifyContent="space-between"><p style={{fontWeight: "bold", color: "black"}}>420 </p>Followers</Text>
//             </Box>
//           </Container>
//         </Container>
//         <Container bgColor="#dfe9f0" p="20px" h= "400px" mt="10px" borderRadius={10}>
//           <Heading as='h5' size='sm' color="black" pl="15px">
//             Suggest For You
//           </Heading>
//           <Box mt="20px" display="flex" justifyContent="space-around" alignItems="center" p="0 8px">
//             <Image w="40px" h="40px" objectFit="cover" borderRadius="50%" src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fFBFT1BMRXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"></Image>
//             <Box marginRight="15px" w="65%" pl="2">
//               <Text color="black" fontSize="12px" fontWeight="bold">Muhammad Ikhsan</Text>
//               <Text color="#788189" fontSize="12px">@mrramdhan56</Text>
//             </Box>
//             <Button size='xs'>
//               Following
//             </Button>
//           </Box>
//           <Box mt="20px" display="flex" justifyContent="space-around" alignItems="center" p="0 8px">
//             <Image w="40px" h="40px" objectFit="cover" borderRadius="50%" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"></Image>
//             <Box marginRight="15px" w="65%" pl="2">
//               <Text color="black" fontSize="12px" fontWeight="bold">Anwar Ahmad</Text>
//               <Text color="#788189" fontSize="12px">@anwar34</Text>
//             </Box>
//             <Button size='xs'>
//               Follow
//             </Button>
//           </Box>
//           <Box mt="20px" display="flex" justifyContent="space-around" alignItems="center" p="0 8px">
//             <Image w="40px" h="40px" objectFit="cover" borderRadius="50%" src="https://plus.unsplash.com/premium_photo-1668399855680-1ee24ade4a29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"></Image>
//             <Box marginRight="15px" w="65%" pl="2">
//               <Text color="black" fontSize="12px" fontWeight="bold">Angel Francis</Text>
//               <Text color="#788189" fontSize="12px">@aangel78</Text>
//             </Box>
//             <Button size='xs'>
//               Follow
//             </Button>
//           </Box>
//           <Box mt="20px" display="flex" justifyContent="space-around" alignItems="center" p="0 8px">
//             <Image w="40px" h="40px" objectFit="cover" borderRadius="50%" src="https://plus.unsplash.com/premium_photo-1673957923985-b814a9dbc03d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"></Image>
//             <Box marginRight="15px" w="65%" pl="2">
//               <Text color="black" fontSize="12px" fontWeight="bold">Maya Nur Diana</Text>
//               <Text color="#788189" fontSize="12px">@diana_nur</Text>
//             </Box>
//             <Button size='xs'>
//               Follow
//             </Button>
//           </Box>
//           <Box mt="20px" display="flex" justifyContent="space-around" alignItems="center" p="0 8px">
//             <Image w="40px" h="40px" objectFit="cover" borderRadius="50%" src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fFBFT1BMRXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"></Image>
//             <Box marginRight="15px" w="65%" pl="2">
//               <Text color="black" fontSize="12px" fontWeight="bold">Muhammad Ikhsan</Text>
//               <Text color="#788189" fontSize="12px">@mrramdhan56</Text>
//             </Box>
//             <Button size='xs'>
//               Follow
//             </Button>
//           </Box>
//         </Container>
//       </Box>
//     </>
//     )
// }
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
  Link
  // useColorModeValue,
} from '@chakra-ui/react'
import { MdVerified } from 'react-icons/Md';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../../stores/types/rootState';
// import { BiMessageAdd } from "react-icons/bi"



export default function SideRight() {
  const navigate = useNavigate()
  const auth = useSelector((state: RootState) => state.auth)
  // console.log(auth)

  // console.log("data auth:", dataAuth)

  return (
  <Box bgColor='#F0F5F9' p={'10px 20px'} w="400px">
    <Center py={2}>
      <Box
        maxW={'370px'}
        w={'full'}
        bg={"#dfe9f0"}
        // boxShadow={'xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Image
          h={'120px'}
          w={'full'}
          src={
            'https://images.unsplash.com/photo-1675218719517-b20e5bade63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w0NTc2MTk1fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60'
          }
          objectFit="cover"
          alt="#"
        />
        <Link to={"/DetailProfile/"}>
        <Flex justify={'start'} mt={-12} ml={5} mb={0}>
          <Avatar
            onClick={() => navigate('/DetailProfile')}
            size={'xl'}
            src={auth.picture}
            
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>
        </Link>

        <Box p={6} pt={0}>
          <Stack spacing={0} align={'start'} mb={1}>
            <Heading fontSize={'md'} fontWeight={650} display={'flex'} flexDirection={'row'} alignItems={'center'}>
            {auth.full_name}
              <MdVerified color={'blue'}/>
            </Heading>
            <Text color={'gray.500'} fontSize={'13px'}>@{auth.username}</Text>
            <Text color={'gray.900'} fontSize={'sm'}>"{auth.description}"</Text>
          </Stack>

          <Stack direction={'row'} justifyContent={'space-between'} w={'70%'}>
            <Flex alignItems={'center'} display={'flex'} w={'50%'}>
              <Text fontSize={'16px'} fontWeight={600} mr={'1'}>230</Text>
              <Text fontSize={'16px'} color={'gray.500'}>
                Followers
              </Text>
            </Flex>
            <Flex alignItems={'center'} display={'flex'} w={'50%'}>
              <Text fontSize={'16px'} fontWeight={600} mr={'1'}>45</Text>
              <Text fontSize={'16px'} color={'gray.500'}>
                Following
              </Text>
            </Flex>
          </Stack>

          {/* <Button
            w={'full'}
            mt={5}
            bg={'gray.900'}
            color={'white'}
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}>
            Follow
          </Button> */}
          <Box justifyContent={'space-between'}>
          <Link to={'/editProfile'+ auth.id}>
            <Button
              cursor={'pointer'} onClick={() =>  navigate('/editProfile/' + auth.id)}
              w={'48%'}
              mr={3}
              mt={3}
              bg={'transparent'}
              bgColor= {'gray.600'}
              color={'white'}
              rounded={'2xl'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
                color: 'white',
                bgColor: '#52616B'
              }}>
              Edit Profile 
            </Button>
          </Link>
          <Button
            cursor={'pointer'} onClick={() =>  navigate('/posting')}
            w={'48%'}
            mt={3}
            bg={'transparent'}
            bgColor= {'blue.500'}
            color={'white'}
            rounded={'2xl'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
              color: 'white',
              // bgColor: '#52616B'
            }}>
            Upload Thread 
          </Button>
          </Box>
        </Box>
      </Box>
    </Center>
    <Box bgColor="#dfe9f0" p="20px" h= "400px" borderRadius={10}>
          <Heading as='h5' size='sm' color="black" pl="15px">
            Suggest For You
          </Heading>
          <Box mt="20px" display="flex" justifyContent="space-around" alignItems="center" p="0 8px">
            <Image w="40px" h="40px" objectFit="cover" borderRadius="50%" src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fFBFT1BMRXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"></Image>
            <Box marginRight="15px" w="65%" pl="2">
              <Text color="black" fontSize="12px" fontWeight="bold">Muhammad Ikhsan</Text>
              <Text color="#788189" fontSize="12px">@mrramdhan56</Text>
            </Box>
            <Button size='xs'>
              Following
            </Button>
          </Box>
          <Box mt="20px" display="flex" justifyContent="space-around" alignItems="center" p="0 8px">
            <Image w="40px" h="40px" objectFit="cover" borderRadius="50%" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"></Image>
            <Box marginRight="15px" w="65%" pl="2">
              <Text color="black" fontSize="12px" fontWeight="bold">Anwar Ahmad</Text>
              <Text color="#788189" fontSize="12px">@anwar34</Text>
            </Box>
            <Button size='xs'>
              Follow
            </Button>
          </Box>
          <Box mt="20px" display="flex" justifyContent="space-around" alignItems="center" p="0 8px">
            <Image w="40px" h="40px" objectFit="cover" borderRadius="50%" src="https://plus.unsplash.com/premium_photo-1668399855680-1ee24ade4a29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"></Image>
            <Box marginRight="15px" w="65%" pl="2">
              <Text color="black" fontSize="12px" fontWeight="bold">Angel Francis</Text>
              <Text color="#788189" fontSize="12px">@aangel78</Text>
            </Box>
            <Button size='xs'>
              Follow
            </Button>
          </Box>
          <Box mt="20px" display="flex" justifyContent="space-around" alignItems="center" p="0 8px">
            <Image w="40px" h="40px" objectFit="cover" borderRadius="50%" src="https://plus.unsplash.com/premium_photo-1673957923985-b814a9dbc03d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"></Image>
            <Box marginRight="15px" w="65%" pl="2">
              <Text color="black" fontSize="12px" fontWeight="bold">Maya Nur Diana</Text>
              <Text color="#788189" fontSize="12px">@diana_nur</Text>
            </Box>
            <Button size='xs'>
              Follow
            </Button>
          </Box>
          <Box mt="20px" display="flex" justifyContent="space-around" alignItems="center" p="0 8px">
            <Image w="40px" h="40px" objectFit="cover" borderRadius="50%" src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fFBFT1BMRXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"></Image>
            <Box marginRight="15px" w="65%" pl="2">
              <Text color="black" fontSize="12px" fontWeight="bold">Muhammad Ikhsan</Text>
              <Text color="#788189" fontSize="12px">@mrramdhan56</Text>
            </Box>
            <Button size='xs'>
              Follow
            </Button>
          </Box>
        </Box>
    </Box>
  )
}

