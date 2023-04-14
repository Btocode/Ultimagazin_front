import { AiFillHome } from 'react-icons/ai'
import { TiDocumentText } from 'react-icons/ti'
import { MdOutlineSwitchAccount, MdManageAccounts, MdAccountBalanceWallet, MdEngineering } from 'react-icons/md'
import { IoIosPeople, IoMdNotifications, IoMdSettings } from 'react-icons/io'
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
        route: '/'
    },
    {
        id: 2,
        title: 'Reflinks',
        icon: <TiDocumentText />,
        route: '/reflinks'
    },
    {
        id: 3,
        title: 'Leads',
        icon: <MdOutlineSwitchAccount />,
        route: '/leads'
    },
    {
        id: 4,
        title: 'Notification',
        icon: <IoMdNotifications />,
        route: '/notification',
    },
    {
        id: 5,
        title: 'Settings',
        icon: <IoMdSettings />,
        route: '/settings'
    },
];

// dashboard heading data

const dashboardHeading = [
    {
        id: 1,
        icon: <MdManageAccounts />,
        name: 'Active Employee',
        total: '1081',
        update: '+55% than last week weak'

    },
    {
        id: 2,
        icon: <IoIosPeople />,
        name: 'Total Employee',
        total: '2300',
        update: '+3% than last week'
    },
    {
        id: 3,
        icon: <RxDashboard />,
        name: 'Total Task',
        total: '34',
        update: '+1% than yesterday'
    },
    {
        id: 4,
        icon: <VscGraphLine />,
        name: 'Attendance',
        total: '+91',
        update: 'Just updated'
    }
]

// number of department data

const numberofdeptData = [
    {
        id: 1,
        name: 'Engineering and Development',
        icon: <MdEngineering />,
        total: '245'
    },
    {
        id: 2,
        name: 'Marketing and Sales',
        icon: <GiArcheryTarget />,
        total: '245'
    },
    {
        id: 3,
        name: 'Accounting and Finance',
        icon: <MdAccountBalanceWallet />,
        total: '245'
    },
    {
        id: 4,
        name: 'Human Resources',
        icon: <BsFillPeopleFill />,
        total: '245'
    },
    {
        id: 5,
        name: 'IT',
        icon: <RiBarChartGroupedFill />,
        total: '245'
    }
]

const attendencelist = [
    {
        id: 1,
        name: 'Syed Mahamudul Hasan',
        title: 'Moblie App Developer',
        checkIn: '09:00 AM',
        checkout: '16:00 PM',
        working_hours: '09hr 02min',
        break_time: '01hr 00min',
        extra_hours: '00hr 00min',
        status: 'in office',
        date: '2022-05-21',
        image:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 2,
        name: 'Kamrul Hasan',
        title: 'Back-end Developer',
        checkIn: '09:00 AM',
        checkout: '16:00 PM',
        working_hours: '09hr 02min',
        break_time: '01hr 00min',
        extra_hours: '00hr 00min',
        status: 'break',
        date: '2022-05-21',
        image:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 3,
        name: 'Arfan Roky',
        title: 'Front-end Developer',
        checkIn: '09:00 AM',
        checkout: '16:00 PM',
        working_hours: '09hr 02min',
        break_time: '01hr 00min',
        extra_hours: '00hr 00min',
        status: 'in office',
        date: '2022-05-21',
        image:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 4,
        name: 'Afsan Rohmatullah',
        title: 'Full-stack Developer',
        checkIn: '09:00 AM',
        checkout: '16:00 PM',
        working_hours: '09hr 02min',
        break_time: '01hr 00min',
        extra_hours: '00hr 00min',
        status: 'break',
        date: '2022-05-21',
        image:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 5,
        name: 'Wasif Zaman Omee',
        title: 'Full-stack Developer',
        checkIn: '09:00 AM',
        checkout: '16:00 PM',
        working_hours: '09hr 02min',
        break_time: '01hr 00min',
        extra_hours: '00hr 00min',
        status: 'in office',
        date: '2022-05-21',
        image:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]

const employeelistData = [
    {
        id: 1,
        name: 'John Doe',
        designation: 'Web Developer',
        joined_on: '12/12/2020',
        terminated_on: '12/12/2020',
        office_start_time: '9:00 AM',
        office_end_time: '6:00 PM',
        maximum_sick_leaves_in_a_year: '12',
        maximum_break_time: '12',
        overtime_available: '12',
    },
    {
        id: 2,
        name: 'John Doe',
        designation: 'Web Developer',
        joined_on: '12/12/2020',
        terminated_on: '12/12/2020',
        office_start_time: '9:00 AM',
        office_end_time: '6:00 PM',
        maximum_break_time: '12',
        maximum_sick_leaves_in_a_year: '12',
        overtime_available: '12',

    },
    {
        id: 3,
        name: 'John Doe',
        designation: 'Web Developer',
        joined_on: '12/12/2020',
        terminated_on: '12/12/2020',
        office_start_time: '9:00 AM',
        office_end_time: '6:00 PM',
        maximum_sick_leaves_in_a_year: '12',
        maximum_break_time: '12',
        overtime_available: '12',

    },
    {
        id: 4,
        name: 'John Doe',
        designation: 'Web Developer',
        joined_on: '12/12/2020',
        terminated_on: '12/12/2020',
        office_start_time: '9:00 AM',
        office_end_time: '6:00 PM',
        maximum_sick_leaves_in_a_year: '12',
        maximum_break_time: '12',
        overtime_available: '12',

    },
    {
        id: 5,
        name: 'John Doe',
        designation: 'Web Developer',
        joined_on: '12/12/2020',
        terminated_on: '12/12/2020',
        office_start_time: '9:00 AM',
        office_end_time: '6:00 PM',
        maximum_sick_leaves_in_a_year: '12',
        maximum_break_time: '12',
        overtime_available: '12',

    },
    {
        id: 6,
        name: 'John Doe',
        designation: 'Web Developer',
        joined_on: '12/12/2020',
        terminated_on: '12/12/2020',
        office_start_time: '9:00 AM',
        office_end_time: '6:00 PM',
        maximum_break_time: '12',
        overtime_available: '12',
        maximum_sick_leaves_in_a_year: '12',

    },
    {
        id: 7,
        name: 'John Doe',
        designation: 'Web Developer',
        joined_on: '12/12/2020',
        terminated_on: '12/12/2020',
        office_start_time: '9:00 AM',
        office_end_time: '6:00 PM',
        maximum_break_time: '12',
        overtime_available: '12',
        maximum_sick_leaves_in_a_year: '12',

    },
    {
        id: 8,
        name: 'John Doe',
        designation: 'Web Developer',
        joined_on: '12/12/2020',
        terminated_on: '12/12/2020',
        office_start_time: '9:00 AM',
        office_end_time: '6:00 PM',
        maximum_break_time: '12',
        overtime_available: '12',
        maximum_sick_leaves_in_a_year: '12',

    },
    {
        id: 9,
        name: 'John Doe',
        designation: 'Web Developer',
        joined_on: '12/12/2020',
        terminated_on: '12/12/2020',
        office_start_time: '9:00 AM',
        office_end_time: '6:00 PM',
        maximum_break_time: '12',
        overtime_available: '12',
        maximum_sick_leaves_in_a_year: '12',

    },

    {
        id: 10,
        name: 'John Doe',
        designation: 'Web Developer',
        joined_on: '12/12/2020',
        terminated_on: '12/12/2020',
        office_start_time: '9:00 AM',
        office_end_time: '6:00 PM',
        maximum_break_time: '12',
        overtime_available: '12',
        maximum_sick_leaves_in_a_year: '12',

    },

]

const accountlistData = [
    {
        key: "salary_page",
        id: 1,
        icon: <CgFileDocument />,
        name: 'Salary Payment Sheet',
        updated_on: 'Updated 2 days ago'
    },
    {
        key: "expense_page",
        id: 2,
        icon: <CgFileDocument />,
        name: 'Expense Traking',
        updated_on: 'Updated 3 days ago'
    },
    {
        key: "purchase_page",
        id: 3,
        icon: <CgFileDocument />,
        name: 'Purchase Order',
        updated_on: 'Updated 1 days ago'
    },
    {
        key: "invoice_page",
        id: 4,
        icon: <CgFileDocument />,
        name: 'Invoice',
        updated_on: 'Updated 2 days ago'
    }
]
export {
    menuItem,
    dashboardHeading,
    numberofdeptData,
    employeelistData,
    accountlistData,
    attendencelist,
}