
import React from 'react'
import {useState, useEffect, useRef} from 'react'
import {useNavigate, Link} from "react-router-dom"
import Navbar from "../components/Navbar"
import {Box, Heading, VStack, HStack} from "@chakra-ui/layout"
import {FormControl, FormLabel} from "@chakra-ui/form-control"
import { Button, Input } from '@chakra-ui/react'
import Axios from "axios"
import * as AiIcons from "react-icons/ai"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login(){

  const navigate = useNavigate(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //let msg = 0;
  const [msg, setMsg] = useState('')
    
  const onSignUpPressed = () => {             //poslanie udajov o registrovanom zakaznikovy na server aby sa zapisali do databazi
    async function getData() {
      try{
         const resp = await Axios.put(`api/login`, { 
         
            email: email,
            password: password,
            
          })
          .then((response) => { 
            if (response.data == '404'){
              toast.error('Password does not match!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
              }
              if (response.data == '405'){
                toast.error('Account does not exist!', {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                  });
                }
              if (response.data == '200'){
               /* toast.success('Successfully logged in!', {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                  });
*/
                  navigate('/loggedIn',{ state: email})
              }
          })
           
          }
      catch(err){
        console.log(err)
      } 
       
    }getData()
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
                            onClick={ ()=> { onSignUpPressed(); }  }>Login</Button>
                    
                    <Button variant='link' colorScheme='blue' alignSelf='center'>Forgot password?</Button>
                    
                                
                </VStack>

        </Box>
        <ToastContainer></ToastContainer>
        </div>
    );      
}

export default Login
