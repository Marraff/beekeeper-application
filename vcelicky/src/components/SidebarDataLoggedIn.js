import React from 'react'
import * as AiIcons from "react-icons/ai"
import * as GiIcons from "react-icons/gi"

export const SidebarData = [
    {
        title: 'Map of hives',
        /*font: 'montseratt',*/
        path: '/loggedIn',
        icon: <GiIcons.GiBeehive />,
        cName: 'nav-text'
    },
    {
        title: 'Information',
        path: '/loggedIn',
        /*font: 'montseratt',*/
        icon: <AiIcons.AiFillIdcard />,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/loggedIn',
        icon: <AiIcons.AiFillMessage />,
        cName: 'nav-text'
    },
    /*
    {
        title: 'Register',
        path: '/register',
        icon: <AiIcons.AiFillPlusCircle />,
        cName: 'nav-text'
    },*/
    {
        title: 'Logout',
        path: '/',
        icon: <AiIcons.AiOutlineLogin />,
        cName: 'nav-text'
    },
]
// za / potom treba doplniť cestu kde bude daný screen