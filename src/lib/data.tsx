/* eslint-disable */
import { AnalysisIcon, BagIcon, FireIcon, MarketingIcon, ShelterIcon, TagIcon } from '../components/Icons'
import { HomeIcon } from '../components/Icons/HomeIcon'
import { RightArrowIcon } from '../components/Icons/RightArrowIcon'
import { SettingsIcon } from '../components/Icons/SettingsIcon'
import { CheckIconWhite } from '../components/Icons/CheckIcon'
import { COLORS } from './constants/colors'

export const headerLinks: Array<{
    id: number
    title: string
    href: string
}> = [
    {
        id: 1,
        title: 'Vantagens',
        href: '#',
    },
    {
        id: 2,
        title: 'Como funciona',
        href: '#',
    },
    {
        id: 3,
        title: 'Benefícios',
        href: '#',
    },
    {
        id: 4,
        title: 'Entrar',
        href: '/login',
    },
]

export const MenuItemList: Array<{
    text: string
    href: string
    leftIcon?: JSX.Element | (() => JSX.Element)
    isDropDown?: { href: string; text: string }[]
    hasRightIcon?: boolean
    rightIcon?: JSX.Element | (() => JSX.Element)
}> = [
    {
        text: 'Início',
        href: '/dashboard/home',
        leftIcon: HomeIcon({ color: COLORS.YELLOW }),
    },
    {
        text: 'Produtos',
        href: '/dashboard/products',
        leftIcon: TagIcon({ color: COLORS.YELLOW }),
    },
    {
        text: 'Solicitações',
        href: '/dashboard/request',
        leftIcon: BagIcon({ color: COLORS.YELLOW }),
    },
    {
        text: 'Análise',
        href: '/dashboard/analysis',
        leftIcon: AnalysisIcon({ color: COLORS.YELLOW }),
    },
    {
        text: 'Loja Virtual',
        href: '/dashboard/onlineStore',
        leftIcon: ShelterIcon({ color: COLORS.YELLOW }),
    },
    {
        text: 'Marketing',
        href: '',
        leftIcon: MarketingIcon({ color: COLORS.YELLOW }),
        isDropDown: [
            {
                href: '/dashboard/marketing/ads',
                text: 'Ads',
            },
            {
                href: '/dashboard/marketing/overview',
                text: 'Overview',
            },
        ],
    },
    {
        text: 'Cupons',
        href: '',
        leftIcon: FireIcon({ color: COLORS.YELLOW }),
        isDropDown: [
            {
                href: '/dashboard/coupons/discounts',
                text: 'Descontos',
            },
            {
                href: '/dashboard/coupons/indicate',
                text: 'Indique',
            },
            {
                href: '/dashboard/coupons/recompense',
                text: 'Recompensa',
            },
        ],
    },
    {
        text: 'Configurações',
        href: '/dashboard/settings',
        leftIcon: SettingsIcon({ color: COLORS.YELLOW }),
        rightIcon: RightArrowIcon({ color: COLORS.YELLOW }),
    },
]

export const dropdownMenuItems = [
    {
        title: 'Gerenciar conta',
        href: '/dashboard/accountManagement',
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
    // {
    //     title: 'Logout',
    // },
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

export type dummyMessagesType = {
    name: string
    message: string
    time: string
    date: string
}

export const dummyMessages: dummyMessagesType[] = [
    { name: 'Kitto Gilmar', message: 'Qual o tamanho do produto?', time: '9:32', date: '01/02/2022' },
    { name: 'Vitória Silva', message: 'Qual previsão de entrega?', time: '9:32', date: '01/02/2022' },
    { name: 'Rafael Cardoso', message: 'Tem outras cores?', time: '9:32', date: '01/02/2022' },
    { name: 'Igor Costa', message: 'Entregam hoje ainda?', time: '9:32', date: '01/02/2022' },
    { name: 'Beatriz Lins', message: 'Meu produto veio errado!', time: '9:32', date: '01/02/2022' },
    { name: 'Gabriel Novaes', message: 'Preciso de ajuda com um...', time: '9:32', date: '01/02/2022' },
]

export type themeTemplateDataType = {
    title: string
    id: string
}[]

export const themeTemplateData: themeTemplateDataType = [
    { title: 'template1', id: '1' },
    { title: 'template2', id: '2' },
    { title: 'template3', id: '3' },
]

export const discountTableHeader: string[] = [
    'Name',
    'Status',
    '%Discount',
    'Product',
    'Coupon Limit',
    'Expiration',
    'Shares',
]

export interface dataInterface {
    name: string
    status: string
    discount: string
    product: string
    couponLimit: string
    expiration: string
}

export const discountTableData: dataInterface[] = [
    {
        name: 'Fev15',
        status: 'Active',
        discount: '15%',
        product: 'Shirts',
        couponLimit: '500',
        expiration: '28/02/2022',
    },
    {
        name: 'Fev15',
        status: 'Active',
        discount: '15%',
        product: 'Shirts',
        couponLimit: '500',
        expiration: '28/02/2022',
    },
    {
        name: 'Fev15',
        status: 'Inactive',
        discount: '20%',
        product: 'Shirts',
        couponLimit: '500',
        expiration: '28/02/2022',
    },
    {
        name: 'Jan20',
        status: 'Inactive',
        discount: '20%',
        product: 'Shirts',
        couponLimit: '500',
        expiration: '28/02/2022',
    },
    {
        name: 'Jan20',
        status: 'Inactive',
        discount: '20%',
        product: 'Shirts',
        couponLimit: '500',
        expiration: '28/02/2022',
    },
]

export interface indicateDataType {
    name: string
    bottomText: string
    status: string
    icon: JSX.Element | string | (() => JSX.Element)
}
;[]

export const indicateData: indicateDataType[] = [
    { name: 'Ganhe R$200', bottomText: 'Convite 5 vendedores', status: 'completed', icon: CheckIconWhite({}) },
    { name: 'Ganhe R$500', bottomText: 'Convite 20 vendedores', status: 'pending', icon: '' },
    { name: 'Ganhe 3 premium', bottomText: 'Convite 50 vendedores', status: 'idle', icon: '' },
    { name: 'Ganhe R$1000', bottomText: 'Convite 100 vendedores', status: 'idle', icon: '' },
    { name: 'Ganhe 1 ano premium', bottomText: 'Convite 150 vendedores', status: 'idle', icon: '' },
]

export const recompenseTableHeader: string[] = [
    'Código',
    'Status',
    'Responsável',
    'Email',
    'Telefone',
    'Data de criação',
    'Indicações',
]
export interface recompenseTableInterface {
    code: string
    status: string
    responsible: string
    email: string
    telephone: string
    creationDate: string
    indication: string
}

export const recompenseTableData: recompenseTableInterface[] = [
    {
        code: '#59999999',
        status: 'activa',
        responsible: 'Nome',
        email: 'Email',
        telephone: '[ddd]00000-0000',
        creationDate: '00/00/00',
        indication: '00',
    },
]
