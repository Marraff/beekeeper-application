import React, {useState} from "react";
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { Link } from "react-router-dom"
import { SidebarData } from "./SidebarData"
import styles from "./Navbar.css"
import { IconContext } from "react-icons"
import {useNavigate} from "react-router-dom"
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api"
import img from "./contactIMG.png"
//require("dotenv").config();


function Navbar(menuData){

    const {
        projectVcelicky, 
        myHives, 
        information1, 
        place1, 
        place2, 
        login, 
        title, 
        map_Of_Hives, 
        information2, 
        loremIpsumDolorSi, 
        place3, 
        menoPriezvisko,
        concat1Props } = menuData;

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

            </GoogleMap>
}

export default Navbar;

function Concat1(props){
    const {className} = props;
    return (
        <div className={`concat1 ${className || ""}`}>
            <div className="ellIpse-503-1"></div>
            <div className="meno-priezvisko-1 poppins-medium-black-18px">
                Meno Priezvisko
            </div>
        </div>
    );
}

const concat12Data = {
    className: "concat3",
}

const menuData = {
    projectVcelicky: "Project Vcelicky", 
    myHives: "Map of hives", 
    information1: "Information", 
    place1: "Contact", 
    place2: "Register", 
    login: "Login", 
    title: "Map of hives", 
    map_of_Hives: "map-of-hives.png", 
    information2: "Information", 
    loremIpsumDolorSi: (
        <React.Fragment>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
        </React.Fragment>
    ),
    place3: "Contact", 
    menoPriezvisko: "Meno priezvisko", 
    concat1Props: concat12Data,
    
};