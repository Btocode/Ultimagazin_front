import { AiFillHome } from 'react-icons/ai'
import { TiDocumentText } from 'react-icons/ti'
import { MdOutlineSwitchAccount, MdManageAccounts, MdAccountBalanceWallet, MdEngineering } from 'react-icons/md'
import { IoIosPeople, IoMdNotifications, IoMdPerson, IoMdSettings } from 'react-icons/io'
import { RxDashboard } from 'react-icons/rx'
import { RiBarChartGroupedFill } from 'react-icons/ri'
import { VscGraphLine } from 'react-icons/vsc'
import { BsFillChatDotsFill, BsFillPeopleFill } from 'react-icons/bs'
import { GiArcheryTarget } from 'react-icons/gi'
import { CgFileDocument } from 'react-icons/cg'

//  menu item data

const menuItem = [
    {
        id: 1,
        title: 'Dashboard',
        icon: <AiFillHome />,
        route: '/',
        enable: true
    },
    {
        id: 2,
        title: 'Reflinks',
        icon: <TiDocumentText />,
        route: '/reflinks',
        enable: true
    },
    {
        id: 3,
        title: 'Leads',
        icon: <MdOutlineSwitchAccount />,
        route: '/leads',
        enable: true

    },
    {
        id: 4,
        title: 'Networkers',
        icon: <IoIosPeople />,
        route: '/networkers',
        enable: localStorage.getItem("is_admin") === "true" ? true : false
    },
    // {
    //     id: 5,
    //     title: 'Settings',
    //     icon: <IoMdSettings />,
    //     route: '/settings',
    //     enable: true
    // },
];

export {
    menuItem,
    
}