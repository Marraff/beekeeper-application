
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
  const [sidebar, setSidebar] = useState(true)
  const showSidebar = () => setSidebar(!sidebar)
  const [hiveData, setHiveData] = useState({})
  var hData = {}
  
  useEffect(()=>{
    setHiveData(location.state)
    hData=location.state

  },[hiveData]); 
 
  return(
        <>
            <IconContext.Provider value={{color: "black" }}>
            <div className="navbar">
                <Link to = "#" className="menu-bars"></Link>
                    <FaIcons.FaBars onClick={showSidebar}/>
                 
            </div>
            <div className="background"> 
          
            <nav className={sidebar ? "nav-menu active" : "nav-menu poppins-normal-haiti-20px"} >
                <ul className="nav-menu-items" onClick={(showSidebar)}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose/>
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
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
                                <Box boxShadow='md' p='6' rounded='md' bg='white' w='100%'>
                                    {location.state.data.outside_humidity}
                                </Box>
                                <Text fontSize="2xl" as='b' >Outside humidity</Text>
                            </VStack>
                            <VStack >
                                <Box boxShadow='md' p='6' rounded='md' bg='white' w='100%'>
                                    {location.state.data.outside_temperature}
                                </Box>
                                <Text fontSize="2xl" as='b' >Outside temperature</Text>
                            </VStack>
                            <VStack >
                                <Box boxShadow='md' p='6' rounded='md' bg='white' w='100%'>
                                    {location.state.data.precipitation_total}
                                </Box>
                                <Text fontSize="2xl" as='b' >Precipitation total</Text>
                            </VStack>
                            <VStack >
                                <Box boxShadow='md' p='6' rounded='md' bg='white' w='100%'>
                                    {location.state.data.air_preassure}
                                </Box>
                                <Text fontSize="2xl" as='b' >Air preassure</Text>
                            </VStack>
                        </SimpleGrid>
                        <HStack
                            bg='gray.50'
                            
                            spacing='195'
                            padding='10'
                            textAlign='center'
                            rounded='lg'
                            
                            color='gray.400'
                            align={['flex-start','center']} 
                            alignSelf='center'
                            >
                            
                                <VStack >
                                    <Box boxShadow='md' p='6' rounded='md' bg='white' w='100%'>
                                        {location.state.data.home_frequency}
                                    </Box>
                                    <Text fontSize="2xl" as='b' >Home frequency</Text>
                                </VStack>
                                <VStack >
                                    <Box boxShadow='md' p='6' rounded='md' bg='white' w='100%'>
                                        {location.state.data.wind_strenght}
                                    </Box>
                                    <Text fontSize="2xl" as='b' >Wind strenght</Text>
                                </VStack>
                                <VStack >
                                    <Box boxShadow='md' p='6' rounded='md' bg='white' w='100%'>
                                        {location.state.data.wind_direction}
                                    </Box>
                                    <Text fontSize="2xl" as='b' >Wind direction</Text>
                                </VStack>
                            
                        </HStack>
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
                                <Box boxShadow='md' p='6' rounded='md' bg='white' w='100%'>
                                    {location.state.data.inside_humidity}
                                </Box>
                                <Text fontSize="2xl" as='b'>Inside humidity</Text>
                            </VStack>
                            <VStack >
                                <Box boxShadow='md' p='6' rounded='md' bg='white' w='100%'>
                                    {location.state.data.inside_humidity}
                                </Box>
                                <Text fontSize="2xl" as='b'>Inside humidity</Text>
                            </VStack>
                            <VStack >
                                <Box boxShadow='md' p='6' rounded='md' bg='white' w='100%'>
                                    {location.state.data.hive_weight}
                                </Box>
                                <Text fontSize="2xl" as='b'>Hive weight</Text>
                            </VStack>
                            <VStack >
                                <Box boxShadow='md' p='6' rounded='md' bg='white' w='100%'>
                                    {location.state.data.move}
                                </Box>
                                <Text fontSize="2xl" as='b'>Moved</Text>
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
