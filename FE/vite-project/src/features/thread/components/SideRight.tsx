
import {Box, Heading, Button, Container, Image, Text} from "@chakra-ui/react"


export default function SideRight() {
    return (
      <>
        <Box display="flex" flexDirection="column" padding="30px" w="410px">
        <Container bgColor="#dfe9f0" padding="15px" h= "290px" borderRadius={10}>
          <Heading as='h5' size='sm' color="black" paddingLeft="15px">
            Profile
          </Heading>
          <Container>
            <Box w='100%' h='80px' bgGradient='linear(to-r, green.400, pink.900)'mt="20px" borderRadius={20}/>
            <Image w="70px" h="70px" mt="-40px" ml="20px" border="4px solid #dfe9f0" borderRadius="50%"src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fFBFT1BMRXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" />
            <Heading as='h5' size='sm' color="black" mb="5px">
              Rahmat Rizky Rifai
            </Heading>
            <Text color="grey" fontSize="11px" mb="3px">@rhmtrizky_</Text>
            <Text color="black" fontSize="12px" mb="3px">muda berkarya, tua berjaya, mati masuk surga</Text>
            <Box fontSize="12px" display="flex" color="grey" justifyContent="space-between" w="55%">
              <Text display="flex" w="43%" justifyContent="space-between"><p style={{fontWeight: "bold", color: "black"}}>39 </p>Following </Text>
              <Text display="flex" w="47%" justifyContent="space-between"><p style={{fontWeight: "bold", color: "black"}}>420 </p>Followers</Text>
            </Box>
          </Container>
        </Container>
        <Container bgColor="#dfe9f0" p="20px" h= "400px" mt="10px" borderRadius={10}>
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
        </Container>
      </Box>
    </>
    )
}