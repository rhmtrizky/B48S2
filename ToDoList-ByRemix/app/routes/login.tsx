import { Box, Center, Container, Flex, FormLabel, Spacer, Text, Input, Button } from "@chakra-ui/react";
import type {
    ActionArgs,
    LinksFunction,
    V2_MetaFunction,
  } from "@remix-run/node";
  import { Form, Link, useActionData, useSearchParams } from "@remix-run/react";
  
  import { db } from "~/utils/db.server";
  import { badRequest } from "~/utils/request.server";
  import { createUserSession, login, register } from "~/utils/session.server";
  
  export const meta: V2_MetaFunction = () => {
    const description = "Login to submit your own jokes to Remix Jokes!";
  
    return [
      { name: "description", content: description },
      { name: "twitter:description", content: description },
      { title: "Remix Jokes | Login" },
    ];
  };
  
  function validateUsername(username: string) {
    if (username.length < 3) {
      return "Usernames must be at least 3 characters long";
    }
  }
  
  function validatePassword(password: string) {
    if (password.length < 6) {
      return "Passwords must be at least 6 characters long";
    }
  }
  
  function validateUrl(url: string) {
    const urls = ["/posts", "/", "https://remix.run"];
    if (urls.includes(url)) {
      return url;
    }
    return "/posts";
  }
  
  export const action = async ({ request }: ActionArgs) => {
    const form = await request.formData();
    const loginType = form.get("loginType");
    const password = form.get("password");
    const username = form.get("username");
    const redirectTo = validateUrl(
      (form.get("redirectTo") as string) || "/posts",
    );
    if (
      typeof loginType !== "string" ||
      typeof password !== "string" ||
      typeof username !== "string"
    ) {
      return badRequest({
        fieldErrors: null,
        fields: null,
        formError: "Form not submitted correctly.",
      });
    }
  
    const fields = { loginType, password, username };
    const fieldErrors = {   
      password: validatePassword(password),
      username: validateUsername(username),
    };
    if (Object.values(fieldErrors).some(Boolean)) {
      return badRequest({
        fieldErrors,
        fields,
        formError: null,
      });
    }
  
    switch (loginType) {
      case "login": {
        const user = await login({ username, password });
        console.log({ user });
        if (!user) {
          return badRequest({
            fieldErrors: null,
            fields,
            formError: "Username/Password lo salah anjay",
          });
        }
        return createUserSession(user.id, redirectTo);
      }
      case "register": {
        const userExists = await db.user.findFirst({ where: { username } });
        if (userExists) {
          return badRequest({
            fieldErrors: null,
            fields,
            formError: `User with username ${username} already exists`,
          });
        }
        const user = await register({ username, password });
        if (!user) {
          return badRequest({
            fieldErrors: null,
            fields,
            formError: "Something went wrong trying to create a new user.",
          });
        }
        return createUserSession(user.id, redirectTo);
      }
      default: {
        return badRequest({
          fieldErrors: null,
          fields,
          formError: "Login type invalid",
        });
      }
    }
  };

  export default function Login() {
    const actionData = useActionData<typeof action>();
    const [searchParams] = useSearchParams();
    return (
      <Container border={'1px solid white'} borderRadius={'10'} p={'5'} mt={'20vh'} w={'35%'}>
        <Flex justifyContent={'center'}>
        <Center>
          <Form method="post">
            <input
              type="hidden"
              name="redirectTo"
              value={searchParams.get("redirectTo") ?? undefined}
            />
            <Flex direction={'column'} alignItems={'center'}>
                <Flex mb={'3'} fontSize="25px" fontWeight="bold" gap={'2'}>
                  <Spacer color="red.600">Login</Spacer> 
                  <Spacer>or </Spacer>
                  <Spacer color={'blue.500'}>Register</Spacer>
                </Flex>
              <Flex justifyContent={'space-between'} w={'150px'} mb={'6'}>
                <FormLabel>
                  <input
                    type="radio"
                    name="loginType"
                    value="login"
                    defaultChecked={
                      !actionData?.fields?.loginType ||
                      actionData?.fields?.loginType === "login"
                    }
                  />{" "}
                  Login
                </FormLabel>
                <label>
                  <input
                    type="radio"
                    name="loginType"
                    value="register"
                    defaultChecked={actionData?.fields?.loginType === "register"}
                  />{" "}
                  Register
                </label>
              </Flex>
            </Flex>
            <Flex direction={'column'} mb={'3'} w={'350px'}>
              <FormLabel htmlFor="username-input">Username</FormLabel>
              <Input
                borderRadius={'7'}
                placeholder="username"
                type="text"
                id="username-input"
                name="username"
                defaultValue={actionData?.fields?.username}
                aria-invalid={Boolean(actionData?.fieldErrors?.username)}
                aria-errormessage={
                  actionData?.fieldErrors?.username ? "username-error" : undefined
                }
              />
              {actionData?.fieldErrors?.username ? (
                <p
                  className="form-validation-error"
                  role="alert"
                  id="username-error"
                >
                  {actionData.fieldErrors.username}
                </p>
              ) : null}
            </Flex>
            <Flex direction={'column'}>
              <FormLabel htmlFor="password-input">Password</FormLabel>
              <Input
                borderRadius={'7'}
                placeholder="password"
                id="password-input"
                name="password"
                type="password"
                defaultValue={actionData?.fields?.password}
                aria-invalid={Boolean(actionData?.fieldErrors?.password)}
                aria-errormessage={
                  actionData?.fieldErrors?.password ? "password-error" : undefined
                }
              />
              {actionData?.fieldErrors?.password ? (
                <p
                  className="form-validation-error"
                  role="alert"
                  id="password-error"
                >
                  {actionData.fieldErrors.password}
                </p>
              ) : null}
            </Flex>
            <div id="form-error-message">
              {actionData?.formError ? (
                <p className="form-validation-error" role="alert">
                  {actionData.formError}
                </p>
              ) : null}
            </div>
            <Flex mt={'3'} justifyContent={'end'}>
            <Button bgColor={'blue.500'} type="submit">
              Submit
            </Button>
            </Flex>
          </Form>
        </Center>
        </Flex>
      </Container>
    );
  }
  