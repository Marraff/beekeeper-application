import React, {useEffect, useState} from "react";
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { Link } from "react-router-dom"
import { SidebarData } from "./SidebarData"
import styles from "./Navbar.css"
import { IconContext } from "react-icons"
import {useNavigate} from "react-router-dom"
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api"
import img from "./contactIMG.png"
import Axios from "axios"

function Navbar(){

    const [sidebar, setSidebar] = useState(false);
    const [hivesList, setHivesList] = useState('');

    const showSidebar = () => setSidebar(!sidebar); 
    
    useEffect(()=>{
        Axios.get('api/loadHives')
        .then((response) => setHivesList(response))
        .then(console.log(hivesList))
    
    },[]); 
 
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY

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
                    <Map />
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