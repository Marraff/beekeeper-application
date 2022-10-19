import React from 'react'
import * as AiIcons from "react-icons/ai"
import * as GiIcons from "react-icons/gi"

export const SidebarData = [
    {
        title: 'Map of hives',
        /*font: 'montseratt',*/
        path: '/',
        icon: <GiIcons.GiBeehive />,
        cName: 'nav-text'
    },
    {
        title: 'Information',
        path: '/',
        /*font: 'montseratt',*/
        icon: <AiIcons.AiFillIdcard />,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/',
        icon: <AiIcons.AiFillMessage />,
        cName: 'nav-text'
    },
    {
        title: 'Register',
        path: '/register',
        icon: <AiIcons.AiFillPlusCircle />,
        cName: 'nav-text'
    },
    {
        title: 'Login',
        path: '/login',
        icon: <AiIcons.AiOutlineLogin />,
        cName: 'nav-text'
    },
]
// za / potom treba doplniť cestu kde bude daný screen