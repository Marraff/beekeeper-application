import React, {useState} from "react";
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { Link } from "react-router-dom"
import { SidebarData } from "./SidebarData"
import styles from "./Navbar.css"
import { IconContext } from "react-icons"
import {useNavigate} from "react-router-dom"
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api"

function Navbar(){
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    let history = useNavigate();

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,

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
            
                    <Map />
                
            <nav className={sidebar ? "nav-menu active" : "nav-menu"} >
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
            </div>
            </IconContext.Provider>
        </>
        
    )
}

function Map(){
    return <GoogleMap 
                zoom={7} 
                center={{lat: 48.669, lng: 19.699}} 
                mapContainerClassName="map-container">

            </GoogleMap>
}

export default Navbar;