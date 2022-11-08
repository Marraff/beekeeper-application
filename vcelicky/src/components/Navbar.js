import React, {useEffect, useState} from "react";
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { Link, Navigate } from "react-router-dom"
import { SidebarData } from "./SidebarData"
import styles from "./Navbar.css"
import { IconContext } from "react-icons"
import {useNavigate} from "react-router-dom"
import {GoogleMap, useLoadScript, Marker, InfoWindow} from "@react-google-maps/api"
import img from "./contactIMG.png"
import Axios from "axios"

function Navbar(){

    const [sidebar, setSidebar] = useState(true);
    const [hivesList, setHivesList] = useState('');
    const showSidebar = () => setSidebar(!sidebar); 
    
    var hives ;
    var hives2 = [];
    var positions;
    var futureJSON;
    
    useEffect(()=>{
        Axios.get('api/loadHives')
        .then((response) => {setHivesList(response.data);}) //setHivesList(response.data)})
        
    },[hivesList]); 

    const prepareHivesList = () => {
        
        hives = hivesList;
        hives = hives.split(')')
        hives.pop()
        //console.log(hives)

        hives.map(hive => {
            
            positions = hive.split(',')
            futureJSON = hive.substring(2,254)
            futureJSON = futureJSON.replace('(','')
            futureJSON = JSON.parse(futureJSON)
            //console.log(futureJSON)
            hive = { "data": 
                futureJSON
                , "lat": parseFloat(positions[12]), "lng": parseFloat(positions[11]), "id": parseInt(positions[13])}
            //console.log(hive)
            hives2.push(hive)
       
        })
        //hives2.pop()
        

    }
   
   
    const navigate = useNavigate();
    const onSignUpPressed = (hive) =>{
        //console.log(hive)
        navigate('/hiveDetail', { state: hive})
    }
    
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: 'AIzaSyBZhZDwFF3W-CdXUIHW2QkZsDP46efhuiQ'//process.env.REACT_APP_GOOGLE_MAPS_API_KEY

    })

    if(!isLoaded) return <div>Loading</div>;

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
                    <div className="title poppins-normal-black-20px">
                        Map of hives
                    </div>
                    
                    <GoogleMap 
                        zoom={7.9} 
                        center={{lat: 48.669, lng: 19.699}} 
                        mapContainerClassName="map-container">
                        {prepareHivesList()}
                        {hives2.map((hive) => (
                                <Marker key={hive.id} 
                                        position={{lat: hive.lat, lng: hive.lng}}
                                        onClick={ ()=> {onSignUpPressed(hive);}}></Marker>
                        ))}

                     </GoogleMap>


                </div>
                <div className="information-2">
                    <div className="information-3 poppins-normal-black-30px">
                        Information
                    </div>
                </div>
                <div className="lorem-ipsum-dolor-si  poppins-normal-black-20px">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </div>
                
                <div className="concat-1">
                    <div className="meno-priezvisko poppins-medium-black-18px">
                        Contact
                    </div>
                    <img className="ellipse-503" src={img}></img>
                   
                </div>               
            </div>
            </div>
            </IconContext.Provider>
        </>
        
    )
}

function Map(){
    return <GoogleMap 
                zoom={7.9} 
                center={{lat: 48.669, lng: 19.699}} 
                mapContainerClassName="map-container">
                
                <Marker
                    position={{lat: 48.669, lng: 19.699}}
                    
                     >
                </Marker>

            </GoogleMap>
}


export default Navbar;