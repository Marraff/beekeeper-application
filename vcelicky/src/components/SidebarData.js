import React from 'react'
import * as AiIcons from "react-icons/ai"
import * as GiIcons from "react-icons/gi"

export const SidebarData = [
    {
        title: 'Informácie',
        path: '/',
        font: 'montseratt',
        icon: <AiIcons.AiFillIdcard />,
        cName: 'nav-text'
    },
    {
        title: 'Úle',
        font: 'montseratt',
        path: '/',
        icon: <GiIcons.GiBeehive />,
        cName: 'nav-text'
    },
    {
        title: 'Kontakt',
        path: '/',
        icon: <AiIcons.AiFillMessage />,
        cName: 'nav-text'
    },
    {
        title: 'Registrácia',
        path: '/',
        icon: <AiIcons.AiFillPlusCircle />,
        cName: 'nav-text'
    },
    {
        title: 'Login',
        path: '/',
        icon: <AiIcons.AiOutlineLogin />,
        cName: 'nav-text'
    },
]
// za / potom treba doplniť cestu kde bude daný screen