
import React from 'react'
import {useState} from 'react'
import {useNavigate, Link} from "react-router-dom"
import styles from "../Register.css"
import Navbar from "../components/Navbar"
import {Box, Heading, Text, VStack, HStack} from "@chakra-ui/layout"
import {FormControl, FormLabel} from "@chakra-ui/form-control"
import { Button, Checkbox, Input } from '@chakra-ui/react'
import Axios from "axios"
import * as AiIcons from "react-icons/ai"

function Login(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    
  const onSignUpPressed = () => {             //poslanie udajov o registrovanom zakaznikovy na server aby sa zapisali do databazi
      

    (async function () {
     
         const resp = Axios.put(`api/login`, { 
         
            email: email,
            password: password,
            
          })
          .then((response) => console.log(response))
          //.then(()=> { console.log(resp);});
         
    })();  
    };


    
    return(
        <div>
        <Box
            w={['full','md']}
            p={[8,10]}
            mt={[20,'10vh']}
            mx='auto'
            border={['none','1px']}
            borderColor={['','gray.300']}
            borderRadius={10}
            >
                <VStack spacing={4} align='flex-start' w='full'>
                    <HStack spacing={1} align={['flex-start','center']} alignSelf='center'>
                        <Link to='/'>
                            {<AiIcons.AiOutlineArrowLeft/>}    
                        </Link>
                        <Heading>Login</Heading>
                    </HStack>
                    <FormControl>
                        <FormLabel>E-mail address</FormLabel>
                        <Input rounder='none' 
                               variant='filled' 
                               placeholder='email@gmail.com'
                               onChange={(event) => {
                               setEmail(event.target.value)}}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <Input rounder='none' 
                               variant='filled' 
                               type='password' 
                               placeholder='******'
                               onChange={(event) => {
                                setPassword(event.target.value)}}/>
                    </FormControl>
                    
                    <Button rounder='none' 
                            colorScheme='blue' 
                            width='365px'
                            onClick={ ()=> {onSignUpPressed();}}>Login</Button>
                    
                    <Button variant='link' colorScheme='blue' alignSelf='center'>Forgot password?</Button>
                   
                </VStack>

        </Box>
        </div>
    );      
}

export default Login

/*
<Input rounder='none' variant='filled' type='password'></Input>
 <Input rounder='none' variant='filled'></Input>

import React, { useState } from 'react';
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  CircularProgress,
  Text,
  InputGroup,
  InputRightElement,
  Icon
} from '@chakra-ui/core';

import { userLogin } from '../utils/mockApi';
//import ErrorMessage from '../components/ErrorMessage';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();

    setIsLoading(true);

    try {
      await userLogin({ email, password });
      setIsLoggedIn(true);
      setIsLoading(false);
      setShowPassword(false);
    } catch (error) {
      setError('Invalid username or password');
      setIsLoading(false);
      setEmail('');
      setPassword('');
      setShowPassword(false);
    }
  };

  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box
        p={8}
        maxWidth="500px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        {isLoggedIn ? (
          <Box textAlign="center">
            <Text>{email} logged in!</Text>
            <Button
              variantColor="orange"
              variant="outline"
              width="full"
              mt={4}
              onClick={() => setIsLoggedIn(false)}
            >
              Sign out
            </Button>
          </Box>
        ) : (
          <>
            <Box textAlign="center">
              <Heading>Login</Heading>
            </Box>
            <Box my={4} textAlign="left">
              <form onSubmit={handleSubmit}>
                
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    placeholder="test@test.com"
                    size="lg"
                    onChange={event => setEmail(event.currentTarget.value)}
                  />
                </FormControl>
                <FormControl isRequired mt={6}>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="*******"
                      size="lg"
                      onChange={event => setPassword(event.currentTarget.value)}
                    />
                    <InputRightElement width="3rem">
                      <Button
                        h="1.5rem"
                        size="sm"
                        onClick={handlePasswordVisibility}
                      >
                        {showPassword ? (
                          <Icon name="view-off" />
                        ) : (
                          <Icon name="view" />
                        )}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Button
                  variantColor="teal"
                  variant="outline"
                  type="submit"
                  width="full"
                  mt={4}
                >
                  {isLoading ? (
                    <CircularProgress
                      isIndeterminate
                      size="24px"
                      color="teal"
                    />
                  ) : (
                    'Sign In'
                  )}
                </Button>
              </form>
            </Box>
          </>
        )}
      </Box>
    </Flex>
  );
}
*/