
import React from 'react'
import {useState, useEffect} from 'react'
import {useNavigate, Link, useLocation} from "react-router-dom"
import styles from "../Register.css"
import Navbar from "../components/Navbar"
import {Box, Heading, VStack, SimpleGrid, HStack, Flex} from "@chakra-ui/layout"
import {FormControl, FormLabel} from "@chakra-ui/form-control"
import { Button, Checkbox, Input } from '@chakra-ui/react'
import { Text } from "@chakra-ui/react"
import Axios from "axios"
import * as AiIcons from "react-icons/ai"
import { IconContext } from "react-icons"
import * as FaIcons from "react-icons/fa"
import { SidebarData } from "../components/SidebarDataLoggedIn"

function HiveDetail(){

  const navigate = useNavigate()
  const location = useLocation()
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)
  const [hiveData, setHiveData] = useState({})
  const [email, setEmail] = useState('')
  
  useEffect(()=>{
    setHiveData(location.state.hiveInfo.data)
    setEmail(location.state.email)

  },[hiveData,email]); 

  const onSignUpPressed = (num) =>{
    //console.log(hive)
    if (num < 3){
        navigate('/loggedIn', {state: email} )
    }

    if (num == 3){
        navigate('/' )
    }
   }

 
  return(
        <>
            <IconContext.Provider value={{color: "black" }}>
            <div className="navbar">
                <Link to = "#" className="menu-bars"></Link>
                    <FaIcons.FaBars onClick={showSidebar}/>
            </div>
            <div>  
                <Text textAlign='end'>
                    {email}
                </Text>
            </div>
              
            <div className= {sidebar ? "background active" : "background"}> 
          
            <nav className={sidebar ? "nav-menu active" : "nav-menu poppins-normal-haiti-20px"} >
                <ul className="nav-menu-items">
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars"  onClick={(showSidebar)}>
                            <AiIcons.AiOutlineClose/>
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Button 
                                    _hover={{bg: '#1893ff'}}
                                    width='100%'
                                    bg='white'
                                    justifyContent='start'
                                    height='45px'
                                    fontSize='24px'
                                    pl='8px'
                                    pr='0px'
                                    pt='8px'
                                    pb='16px'
                                    borderRadius='4px'
                                    onClick={()=> { onSignUpPressed(index); } }>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Button> 
                            </li>
                        )
                    })} 
                 
                    
                    
                </ul>
                
            </nav>
            <div className="main-screen">
                <div className="map-of-hives">
                    <Heading w={['full','md']}
                            
                             borderColor={['','gray.300']}
                             borderRadius={10}  mx='auto'>Latest hive data</Heading>
                        
                        <SimpleGrid
                            bg='gray.50'
                            columns={{ sm: 2, md: 4 }}
                            spacing='8'
                            padding='10'
                            textAlign='center'
                            rounded='lg'
                            color='gray.400'
                            >
                            
                            <VStack >
                                <Box boxShadow='md' p='6' rounded='md' bg='white' w='100%' border='4px' borderColor='gray.400'>
                                    {hiveData.hive_weight} kg
                                </Box>
                                <Text fontSize="2xl" as='b'>Hive weight</Text>
                            </VStack>
                            <VStack >
                                <Box boxShadow='md' p='6' rounded='md' bg='white' w='100%' border='4px' borderColor='gray.400'>
                                    {hiveData.move}
                                </Box>
                                <Text fontSize="2xl" as='b'>Moved</Text>
                            </VStack>
                            <VStack >
                                <Box boxShadow='md' p='6' rounded='md' bg='white' w='100%' border='4px' borderColor='gray.400'>
                                    {hiveData.inside_humidity} %
                                </Box>
                                <Text fontSize="2xl" as='b'>Inside humidity</Text>
                            </VStack>
                            <VStack >
                                <Box boxShadow='md' p='6' rounded='md' bg='white' w='100%' border='4px' borderColor='gray.400'>
                                    {hiveData.inside_temperature} °C
                                </Box>
                                <Text fontSize="2xl" as='b'>Inside temperature</Text>
                            </VStack>
                            
                        </SimpleGrid>
                        <SimpleGrid
                            bg='gray.50'
                            columns={{ md: 3 }}
                            spacing='8'
                            p='10'
                            textAlign='center'
                            rounded='lg'
                            color='gray.400'
                            alignItems='center'
                            >
                            
                                <VStack >
                                    <Box boxShadow='md' p='6' rounded='md' bg='white' w='100%' border='4px' borderColor='gray.400'>
                                        {hiveData.home_frequency}
                                    </Box>
                                    <Text fontSize="2xl" as='b' >Home frequency</Text>
                                </VStack>
                                <VStack >
                                    <Box boxShadow='md' p='6' rounded='md' bg='white' w='100%' border='4px' borderColor='gray.400'>
                                        {hiveData.wind_strenght} km/h
                                    </Box>
                                    <Text fontSize="2xl" as='b' >Wind strenght</Text>
                                </VStack>
                                <VStack >
                                    <Box boxShadow='md' p='6' rounded='md' bg='white' w='100%' border='4px' borderColor='gray.400'>
                                        {hiveData.wind_direction}
                                    </Box>
                                    <Text fontSize="2xl" as='b' >Wind direction</Text>
                                </VStack>
                            
                        </SimpleGrid>
                        <SimpleGrid
                            bg='gray.50'
                            columns={{ sm: 2, md: 4 }}
                            spacing='8'
                            p='10'
                            textAlign='center'
                            rounded='lg'
                            color='gray.400'
                            
                            >
                            <VStack >
                                <Box boxShadow='md' p='6' rounded='md' bg='white' w='100%' border='4px' borderColor='gray.400'>
                                    {hiveData.outside_humidity} %
                                </Box>
                                <Text fontSize="2xl" as='b' >Outside humidity</Text>
                            </VStack>
                            <VStack >
                                <Box boxShadow='md' p='6' rounded='md' bg='white' w='100%' border='4px' borderColor='gray.400'>
                                    {hiveData.outside_temperature} °C
                                </Box>
                                <Text fontSize="2xl" as='b' >Outside temperature</Text>
                            </VStack>
                            <VStack >
                                <Box boxShadow='md' p='6' rounded='md' bg='white' w='100%' border='4px' borderColor='gray.400'>
                                    {hiveData.precipitation_total} mm
                                </Box>
                                <Text fontSize="2xl" as='b' >Precipitation total</Text>
                            </VStack>
                            <VStack >
                                <Box boxShadow='md' p='6' rounded='md' bg='white' w='100%' border='4px' borderColor='gray.400'>
                                    {hiveData.air_preassure} Pa
                                </Box>
                                <Text fontSize="2xl" as='b' >Air preassure</Text>
                            </VStack>
                        </SimpleGrid>
                
                </div>               
            </div>
        </div>
        </IconContext.Provider>
        </>  
    ); 
      
}

export default HiveDetail
