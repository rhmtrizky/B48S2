import { Form, useLoaderData, useNavigation } from '@remix-run/react';
import { createPost, deletePost, getPosts, updateCheckPost, updatePost } from '~/modules/posts/posts.service';
import { PostForm } from '../PostForm';
import { ActionArgs, LoaderArgs, json, redirect } from '@remix-run/node';
import { Box, Button, Flex, Stack, Input, Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
// import ReactDOM from "react-dom";j
import moment from 'moment';
import { updatePostSchema } from '~/modules/posts/posts.schema';
import { getUserId, requireUserId } from '~/utils/session.server';
// import {AiOutlineCheckSquare, AiFillCheckSquare} from "react-icons/ai"

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  const searchTitle = url.searchParams.get('searchTitle') ?? '';
  const userId = await getUserId(request);
  const post = await getPosts(searchTitle);
  if (userId) {
    return json({ post });
  } else {
    throw (new Response('Token is empty', { status: 401 }), redirect('/login'));
  }
}

const handleBack = () => {
  window.location.href = '/posts';
};

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();

  const actionType = formData.get('actionType');
  const postId = formData.get('postId');
  const updateTitle = formData.get('updateTitle');
  const title = formData.get('title');
  const isDone = (formData.get('isDone') as string) === 'true' ? false : true;
  console.log('ini actionType', actionType);

  if (actionType === 'delete' && postId) {
    await deletePost(postId as string);
    return redirect('/posts');
  }

  if (actionType === 'update' && postId && updateTitle) {
    const updated = await updatePost(postId as string, updateTitle as string);
    return console.log('data updated', updated);
    redirect('/posts');
  }

  if (request.method.toLowerCase() === 'patch') {
    const id = formData.get('id');
    const isDone = (formData.get('isDone') as string) === 'true' ? false : true;

    // console.log(id, isDone);

    const validatedData = updatePostSchema.parse({
      id,
      isDone,
    });

    updateCheckPost(validatedData);
  }

  if (actionType === 'create' && title && isDone) {
    const userId = await requireUserId(request);
    await createPost(
      {
        title: title as string,
        isDone: isDone as boolean,
      },
      userId
    );

    return redirect('/posts');
  }

  return redirect('/posts');
}

export default function PostsIndex() {
  const data = useLoaderData<typeof loader>();
  const { state } = useNavigation();
  const [formUpdate, setFormUpdate] = useState<{ [id: string]: boolean }>({});

  const toggleButtonUpdate = (id: string) => {
    setFormUpdate((prevState) => ({
      ...prevState,
      [id]: !prevState[id] || false,
    }));
  };

  const handleClearForm = () => {
    setFormUpdate({});
  };

  return (
    <>
      <PostForm />
      <Flex justifyContent={'center'}>
        <div>
          {state === 'loading' ? (
            <h1>Loading...</h1>
          ) : (
            <Box
              borderRadius={'10'}
              w={'550px'}
              m={10}
              boxShadow={'lg'}
              p={'20px 50px'}
              border={'1px solid white'}
            >
              <Text
                fontWeight={'bold'}
                fontSize={'25px'}
                display="flex"
                justifyContent={'center'}
                mb={8}
              >
                To Do List
              </Text>
              <Flex
                justifyContent={'center'}
                mb={8}
              >
                <Form method="get">
                  <Input
                    type="text"
                    w={'400px'}
                    name="searchTitle"
                    placeholder="Search your plan.."
                    h={'25px'}
                    p={4}
                  ></Input>
                </Form>
                <Button
                  fontSize={'20px'}
                  onClick={handleBack}
                  type="submit"
                  variant={'ghost'}
                  pb={2}
                >
                  🔄️
                </Button>
              </Flex>
              {data.post.map((d) => (
                <Stack
                  display={'flex'}
                  justifyContent={'center'}
                  borderBottom={'1px solid white'}
                  mb={4}
                >
                  <Text>
                    <Flex
                      alignItems={'center'}
                      h={'20px'}
                      mb={3}
                      ml={5}
                      justifyContent={'space-between'}
                    >
                      <Text>{d.title}</Text>
                      <Form method="PATCH">
                        <Input
                          type="hidden"
                          name="id"
                          value={d.id}
                        />
                        <Input
                          type="hidden"
                          name="isDone"
                          value={d.isDone.toString()}
                        />
                        {d.isDone ? (
                          <Button
                            type="submit"
                            variant={'ghost'}
                          >
                            ✅
                          </Button>
                        ) : (
                          <Button
                            type="submit"
                            variant={'ghost'}
                          >
                            ❌
                          </Button>
                        )}
                      </Form>
                    </Flex>
                    <Flex
                      justifyContent={'space-around'}
                      alignItems={'center'}
                      mb={1}
                      w={'40%'}
                      ml={'1'}
                    >
                      {formUpdate[d.id] ? (
                        <Form method="post">
                          <Input
                            type="hidden"
                            name="actionType"
                            value="update"
                          />
                          <Input
                            type="hidden"
                            name="postId"
                            value={d.id}
                          />
                          <Input
                            mb={2}
                            border={'1px solid white'}
                            name="updateTitle"
                            borderRadius={'10'}
                            w={'170px'}
                            h={'25px'}
                            color={'2d2d2d'}
                            type="text"
                            placeholder="update to do list"
                            fontSize={'12px'}
                          />
                          <Button
                            fontSize={'13px'}
                            mr={3}
                            name="_action"
                            type="submit"
                            h={'20px'}
                            w={'65px'}
                            transform={'translateY(-2px)'}
                            boxShadow={'lg'}
                            borderRadius={'10'}
                            bgColor={'blue.500'}
                            borderStyle={'none'}
                            _hover={{ bgColor: 'green.500', transform: 'translateY(-2px)' }}
                          >
                            Update
                          </Button>
                          <Button
                            onClick={handleClearForm}
                            fontSize={'13px'}
                            type="submit"
                            h={'20px'}
                            w={'65px'}
                            transform={'translateY(-2px)'}
                            boxShadow={'lg'}
                            borderRadius={'10'}
                            bgColor={'red.500'}
                            borderStyle={'none'}
                            _hover={{ bgColor: 'green.500', transform: 'translateY(-2px)' }}
                          >
                            Cancel
                          </Button>
                        </Form>
                      ) : (
                        <>
                          <Button
                            fontSize={'13px'}
                            type="button"
                            h={'20px'}
                            w={'65px'}
                            transform={'translateY(-2px)'}
                            boxShadow={'lg'}
                            borderRadius={'10'}
                            bgColor={'blue.500'}
                            borderStyle={'none'}
                            _hover={{ bgColor: 'green.500', transform: 'translateY(-2px)' }}
                            onClick={() => toggleButtonUpdate(d.id)}
                          >
                            Edit
                          </Button>
                          <Form method="post">
                            <input
                              type="hidden"
                              name="actionType"
                              value="delete"
                            />
                            <input
                              type="hidden"
                              name="postId"
                              value={d.id}
                            />
                            <Button
                              fontSize={'13px'}
                              type="submit"
                              h={'20px'}
                              w={'65px'}
                              transform={'translateY(-2px)'}
                              boxShadow={'lg'}
                              borderRadius={'10'}
                              bgColor={'red.500'}
                              borderStyle={'none'}
                              _hover={{ bgColor: 'green.500', transform: 'translateY(-2px)' }}
                            >
                              Delete
                            </Button>
                          </Form>
                        </>
                      )}
                    </Flex>
                    <Text
                      fontSize="11px"
                      ml={'6'}
                      mb={3}
                    >
                      {' '}
                      {moment(d.createAt).startOf('minute').fromNow()}
                    </Text>
                  </Text>
                </Stack>
              ))}
            </Box>
          )}
        </div>
      </Flex>
    </>
  );
}
