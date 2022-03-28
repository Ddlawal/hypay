/* eslint-disable */
import { AnalysisIcon, BagIcon, FireIcon, MarketingIcon, ShelterIcon, TagIcon } from '../components/Icons'
import { HomeIcon } from '../components/Icons/HomeIcon'
import { RightArrowIcon } from '../components/Icons/RightArrowIcon'
import { SettingsIcon } from '../components/Icons/SettingsIcon'
import { COLORS } from './constants/colors'

export const headerLinks: Array<{
    id: number
    title: string
    href: string
}> = [
    {
        id: 1,
        title: 'Advantages',
        href: '#',
    },
    {
        id: 2,
        title: 'How it works',
        href: '#',
    },
    {
        id: 3,
        title: 'Benefits',
        href: '#',
    },
    {
        id: 4,
        title: 'Enter',
        href: '/signup',
    },
]

export const MenuItemList: Array<{
    text: string
    href: string
    leftIcon?: JSX.Element | (() => JSX.Element)
    isDropDown?: string[]
    hasRightIcon?: boolean
    rightIcon?: JSX.Element | (() => JSX.Element)
}> = [
    {
        text: 'Home',
        href: '/dashboard/home',
        leftIcon: HomeIcon({ color: COLORS.YELLOW }),
    },
    {
        text: 'Products',
        href: '/dashboard/products',
        leftIcon: TagIcon({ color: COLORS.YELLOW }),
    },
    {
        text: 'Request',
        href: '/dashboard/request',
        leftIcon: BagIcon({ color: COLORS.YELLOW }),
    },
    {
        text: 'Analysis',
        href: '/dashboard/analysis',
        leftIcon: AnalysisIcon({ color: COLORS.YELLOW }),
    },
    {
        text: 'Online Store',
        href: '/dashboard/online-store',
        leftIcon: ShelterIcon({ color: COLORS.YELLOW }),
    },
    {
        text: 'Marketing',
        href: '/dashboard/marketing',
        leftIcon: MarketingIcon({ color: COLORS.YELLOW }),
        isDropDown: ['Discount', 'Indicate'],
    },
    {
        text: 'Coupons',
        href: '/dashboard/coupons',
        leftIcon: FireIcon({ color: COLORS.YELLOW }),
    },
    {
        text: 'Settings',
        href: '/dashboard/settings',
        leftIcon: SettingsIcon({ color: COLORS.YELLOW }),
        rightIcon: RightArrowIcon({ color: COLORS.YELLOW }),
    },
]

export const dropdownMenuItems = [
    {
        title: 'Gerenciar conta',
    },
    {
        title: 'Recebimento',
    },
    {
        title: 'Lojas',
    },
    {
        title: 'Central de ajuda',
    },
    {
        title: 'Logout',
    },
]

// Random Image Generator FUnction
export const generateRandomImage: (width: number, height: number) => string = (width = 200, height = 300) => {
    return `https://picsum.photos/${width}/${height}`
}
//eslint-disable-next-line
export const EMAIL_PATTERN =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//eslint-disable-next-line
// export const EMAIL_PATTERN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

type typeOfUser = 'Merchant' | 'Buyer' | 'Both'
export const TYPE_OF_USER: typeOfUser = 'Merchant'
