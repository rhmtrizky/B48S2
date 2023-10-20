// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import ThreadCard from './features/thread/components/ThreadCard';
import SimpleSidebar from './features/thread/components/SimpleSidebar';
import SideRight from './features/thread/components/SideRight';
import { FormLabel, Grid } from '@chakra-ui/react';
import { Box, Button, Avatar, Input } from '@chakra-ui/react';
import { useHooks } from './hooks/useHooks';
import { BiImageAdd } from 'react-icons/bi';
// import ReplyPage from "./pages/ReplyPage"
import { useSelector } from 'react-redux';
import { RootState } from './stores/types/rootState';

function Home() {
  const ThreadRedux = useSelector((state: RootState) => state.thread);
  const auth = useSelector((state: RootState) => state.auth);
  const { createFetchData, handleContentChange, handleImageChange, handleUploadCheck } = useHooks();
  return (
    <>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={5}
      >
        <div>
          <SimpleSidebar />
        </div>
        <div>
          <Box w="500px">
            <form
              action=""
              onSubmit={createFetchData}
            >
              <Box
                mt="5"
                p="10px"
                border="1px solid #a3ced1"
                borderRadius={10}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Avatar
                      mr="2"
                      name="Segun Adebayo"
                      src={auth.picture}
                    />
                    <Input
                      name="content"
                      borderStyle="none"
                      color="black"
                      onChange={handleContentChange}
                      type="text"
                      placeholder="what's happening today?"
                    />
                  </Box>
                  {/* <BiImageAdd fontSize="30px" color="#1E2022"/> */}
                  <Box
                    display={'flex'}
                    mt={2}
                  >
                    <FormLabel
                      cursor={'pointer'}
                      fontSize={16}
                      color={'gray.500'}
                      fontWeight={400}
                    >
                      <BiImageAdd
                        fontSize="30px"
                        color="#1E2022"
                      />
                      <Input
                        hidden
                        name="image"
                        borderStyle="none"
                        bgColor="#F0F5F970"
                        color="black"
                        accept="image/*"
                        onChange={handleImageChange}
                        type="file"
                        placeholder="Your favorite image"
                      />
                    </FormLabel>
                    <Button
                      onClick={handleUploadCheck}
                      type="submit"
                      size="sm"
                      bgColor="#52616B"
                      color="white"
                      borderRadius="20px"
                      ml="2"
                      _hover={{ bg: 'blue.500' }}
                      w={'50%'}
                    >
                      Post
                    </Button>
                  </Box>
                </Box>
              </Box>
            </form>
            {ThreadRedux?.map((item, index) => {
              return (
                <ThreadCard
                  key={index}
                  replies_count={item.replies_count}
                  content={item.content}
                  image={item.image}
                  id={item.id}
                  likes_count={item.likes_count}
                  user={item.user}
                  is_liked={item.is_liked}
                  posted_at={item.posted_at}
                />
              );
            })}
          </Box>
        </div>
        <div>
          <SideRight />
        </div>
      </Grid>
    </>
  );
}
export default Home;
