import React from 'react'
import {useState, useEffect} from "react"
import {Box, Heading, Text, VStack, HStack} from "@chakra-ui/layout"
import {FormControl, FormLabel} from "@chakra-ui/form-control"
import { Button, Checkbox, Input } from '@chakra-ui/react'
import {Link} from "react-router-dom"
import Axios from "axios"
import * as AiIcons from "react-icons/ai"

function Register(){
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSignUpPressed = () => {             //poslanie udajov o registrovanom zakaznikovy na server aby sa zapisali do databazi
       Axios.post('https://vcelicky.fiit.stuba.sk/register', {
          name: name, 
          email: email,
          password: password
        }).then(()=> {
          console.log("Beekeeper added to database");
        });
      };

    return(
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
                  
                    <Heading>Register</Heading>
                </HStack>
                <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input rounder='none' 
                           variant='filled'
                           placeholder='Name Surname' 
                           onChange={(event) => {
                            setName(event.target.value)}}/>
                </FormControl>
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
                           placeholder='********'
                           onChange={(event) => {
                            setPassword(event.target.value)}}/>
                </FormControl>
                <HStack w='full' justify='space-between'>
                    
                </HStack>
                <Button rounder='none' 
                        colorScheme='blue' 
                        width='365px'
                        onClick={ ()=> {onSignUpPressed();}}>Register</Button>
                <Button variant='link' 
                        colorScheme='blue' 
                        alignSelf='center'>Already registered? Log in</Button>
            </VStack>


       </Box>
    );      
}

export default Register
