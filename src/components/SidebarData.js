import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'FirstPage',
        path: '/page1',
        icon: <FaIcons.FaBookOpen />,
        cName: 'nav-text'
    },
    {
        title: 'SecondPage',
        path: '/page2',
        icon: <FaIcons.FaBookOpen />,
        cName: 'nav-text'
    }
]
