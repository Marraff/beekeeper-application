
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
import { SidebarData } from "../components/SidebarData"
import { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function HiveDetail(){

  const navigate = useNavigate()
  const location = useLocation()
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)
  const [hiveData, setHiveData] = useState({})
  
  useEffect(()=>{
    setHiveData(location.state.data)

  },[hiveData]); 

  const data = [
    {
      name: '27.4.2022',
      hiveWeight: hiveData.hive_weight,
    },
    

  ];
 
  return(
        <>
            <IconContext.Provider value={{color: "black" }}>
            <div className="navbar">
                
                    <FaIcons.FaBars onClick={showSidebar}/>
                 
            </div>
            <div className= {sidebar ? "background active" : "background"}>  
          
            <nav className={sidebar ? "nav-menu active" : "nav-menu poppins-normal-haiti-20px"} >
                <ul className="nav-menu-items" >
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars" onClick={(showSidebar)}>
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
                             borderRadius={10}  mx='auto'>Latest public hive data</Heading>
                        
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

                        <SimpleGrid
                            bg='gray.50'
                            columns={{ sm: 2, md: 4 }}
                            spacing='8'
                            p='10'
                            textAlign='center'
                            rounded='lg'
                            color='gray.400'
                            
                            >

                        <LineChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="hiveWeight" stroke="#8884d8" activeDot={{ r: 8 }} />
                        </LineChart>
                        </SimpleGrid>
                
                </div>               
            </div>
        </div>
        </IconContext.Provider>
        </>  
    ); 
      
}

export default HiveDetail
