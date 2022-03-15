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
        href: '#',
    },
]

export const MenuItemList: Array<{
    text: string
    leftIcon?: JSX.Element | (() => JSX.Element)
    isDropDown?: string[]
    hasRightIcon?: boolean
    rightIcon?: JSX.Element | (() => JSX.Element)
}> = [
    {
        text: 'Home',
        leftIcon: HomeIcon({ color: COLORS.YELLOW }),
    },
    {
        text: 'Products',
        leftIcon: TagIcon({ color: COLORS.YELLOW }),
    },
    {
        text: 'Request',
        leftIcon: BagIcon({ color: COLORS.YELLOW }),
    },
    {
        text: 'Analysis',
        leftIcon: AnalysisIcon({ color: COLORS.YELLOW }),
    },
    {
        text: 'Online Store',
        leftIcon: ShelterIcon({ color: COLORS.YELLOW }),
    },
    {
        text: 'Marketing',
        leftIcon: MarketingIcon({ color: COLORS.YELLOW }),
        isDropDown: ['Discount', 'Indicate'],
    },
    {
        text: 'Coupons',
        leftIcon: FireIcon({ color: COLORS.YELLOW }),
    },
    {
        text: 'Settings',
        leftIcon: SettingsIcon({ color: COLORS.YELLOW }),
        rightIcon: RightArrowIcon({ color: COLORS.YELLOW }),
    },
]
