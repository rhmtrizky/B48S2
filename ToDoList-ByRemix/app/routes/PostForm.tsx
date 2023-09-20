import { Form, useNavigation } from '@remix-run/react';
import { Box, Input, Flex, Button } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { useRef } from 'react';

export function PostForm() {
  const { state } = useNavigation();
  const isSubmitting = state === 'submitting';
  let formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (isSubmitting) {
      formRef.current?.reset();
    }
  }, [isSubmitting]);

  return (
    <>
      <Box
        display={'flex'}
        justifyContent={'center'}
      >
        <Form
          ref={formRef}
          method="post"
        >
          <Flex
            w={'400px'}
            justifyContent={'space-between'}
            p={'15px 25px'}
            mt={10}
            alignItems={'center'}
            border={'1px solid white'}
            borderRadius={'10'}
          >
            <Input
              type="hidden"
              name="actionType"
              value="create"
            />
            <Input
              placeholder="what do you wanna do?"
              type="text"
              name="title"
              borderRadius={'10'}
              w={'260px'}
              borderStyle={'none'}
              boxShadow={'lg'}
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              h={'30px'}
              w={'70px'}
              transform={'translateY(-2px)'}
              boxShadow={'lg'}
              borderRadius={'10'}
              bgColor={'blue.500'}
              fontSize={'13px'}
              borderStyle={'none'}
              _hover={{ bgColor: 'gray' }}
            >
              Post
            </Button>
          </Flex>
        </Form>
      </Box>
    </>
  );
}
