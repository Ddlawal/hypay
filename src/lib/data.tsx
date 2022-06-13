/* eslint-disable */
import { AnalysisIcon, BagIcon, FireIcon, MarketingIcon, ShelterIcon, TagIcon,SessionIcon } from '../components/Icons'
import { HomeIcon } from '../components/Icons/HomeIcon'
import { RightArrowIcon } from '../components/Icons/RightArrowIcon'
import { SettingsIcon } from '../components/Icons/SettingsIcon'
import { CheckIconWhite } from '../components/Icons/CheckIcon'
import { COLORS } from './constants/colors'

export type MenuItemListType = {
    text: string
    href: string
    leftIcon?: JSX.Element | (() => JSX.Element)
    isDropDown?: { href: string; text: string }[]
    hasRightIcon?: boolean
    rightIcon?: JSX.Element | (() => JSX.Element)
}

export const headerLinks: Array<{
    id: number
    title: string
    href: string
}> = [
    {
        id: 1,
        title: 'Solução',
        href: '#solution',
    },
    {
        id: 2,
        title: 'Como funciona',
        href: '#function',
    },
    {
        id: 3,
        title: 'Benefícios',
        href: '#benefit',
    },
    {
        id: 4,
        title: 'Entrar',
        href: '/login',
    },
]

export const MenuItemList: MenuItemListType[] = [
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

export const SettingsMenuItemList: MenuItemListType[] = [
    {
        text: 'Notificações',
        href: '/dashboard/settings',
        leftIcon: HomeIcon({ color: COLORS.YELLOW }),
    },
    {
        text: 'Comunicação',
        href: '/dashboard/settings/communication',
        leftIcon: TagIcon({ color: COLORS.YELLOW }),
    },
    {
        text: 'Configurações Gerais',
        href: '/dashboard/settings/general',
        leftIcon: BagIcon({ color: COLORS.YELLOW }),
    },
    {
        text: 'Configurações Avançadas',
        href: '/dashboard/settings/advance',
        leftIcon: AnalysisIcon({ color: COLORS.YELLOW }),
    },
    {
        text: 'Domínios',
        href: '/dashboard/settings/domain',
        leftIcon: SessionIcon({ color: COLORS.YELLOW }),
    },
    {
        text: 'Forma de Entrega',
        href: '/dashboard/settings/form-delivery',
        leftIcon: ShelterIcon({ color: COLORS.YELLOW }),
    },
    {
        text: 'Planos',
        href: '/dashboard/settings/plans',
        leftIcon: HomeIcon({ color: COLORS.YELLOW }),
    },
]

export const dropdownMenuItems = [
    {
        title: 'Gerenciar conta',
        href: '/dashboard/accountManagement',
    },
    {
        title: 'Recebimento',
        href: '/dashboard/bankAccount',
    },
    {
        title: 'Lojas',
        href: '/store',
    },
    {
        title: 'Central de ajuda',
        href: '/dashboard/helpCenter',
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

export const indicateData: indicateDataType[] = [
    { name: 'Ganhe R$200', bottomText: 'Convite 5 vendedores', status: 'completed', icon: CheckIconWhite({}) },
    { name: 'Ganhe R$500', bottomText: 'Convite 20 vendedores', status: 'pending', icon: '' },
    { name: 'Ganhe 3 premium', bottomText: 'Convite 50 vendedores', status: 'idle', icon: '' },
    { name: 'Ganhe R$1000', bottomText: 'Convite 100 vendedores', status: 'idle', icon: '' },
    { name: 'Ganhe 1 ano premium', bottomText: 'Convite 150 vendedores', status: 'idle', icon: '' },
]

export interface TrxnTypeI {
    name: string
    trxn: string
    amount: string
}

export const trxnType: TrxnTypeI[] = [
    { name: 'Rafael Crespo', trxn: 'Withdrawal', amount: 'R$1.000,00' },
    { name: 'Igor Rogério', trxn: 'App Purchase', amount: 'R$1.500,00' },
    { name: 'Rafael Crespo', trxn: 'Withdrawal', amount: 'R$1.000,00' },
    { name: 'Thomas Thomp...', trxn: 'Web-based purchasing', amount: 'R$7.500,00' },
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


export interface PlansCardInterface {
    planTitle: string
    planAmount: string
    packages: boolean[]
}

export const plans: PlansCardInterface[] = [
    { planTitle: 'Plano 1', planAmount: '10', packages: [true, true, false, false, false] },
    { planTitle: 'Plano 2', planAmount: '500', packages: [true, true, true, false, false] },
    { planTitle: 'Plano 3', planAmount: '500', packages: [true, true, true, true, false] },
    { planTitle: 'Plano 4', planAmount: '500', packages: [true, true, true, true, false] },
  ]

export interface tutorialItemsInterface {
    list:string
    text:string
}

export const toturialItemsData:tutorialItemsInterface []=[
{list:'1.',text:'venenatis neque non, nunc quam fermentum ut. Magnis leo nunc porttitor facilisis blandit. Vulputate gravida mattis natoque at.'},
{list:'2.',text:'Vel, turpis sit dictum orci hendrerit erat tristique. Purus eu risus, ultrices aliquam, odio gravida ipsum neque. Dignissim risus, suscipit mauris interdum. A sed consectetur justo tincidunt sit proin et cursus aliquet. Libero faucibus dignissim ridiculus lacus. Porta facilisis suspendisse malesuada leo. A amet nunc massa, lectus adipiscing sollicitudin leo auctor nunc. Turpis commodo, viverra augue adipiscing amet vestibulum. Tristique quam ut elit elementum. Tempor integer ut interdum sagittis elementum nisi nibh auctor pellentesque. Sapien laoreet etiam tincidunt viverra metus sed auctor.'},
{list:'3.',text:'Suspendisse id nec velit ut enim. Amet odio sed at vitae viverra viverra eu feugiat. Feugiat nulla mattis bibendum purus ornare. Egestas donec in sit enim sapien sed id non, est. Massa adipiscing fringilla neque pellentesque. Purus porttitor sapien viverra metus. Integer ut aliquam sit nunc. Blandit enim lorem ornare amet dictum amet. Vitae lacus enim quis hendrerit nibh quisque risus montes. Vitae sit nisl ipsum at non semper. Maecenas libero tortor facilisis nisl placerat velit posuere amet. Eget luctus eu, sodales mattis. Eu, id at non facilisi.'},
{list:'4.',text:'Nisi, faucibus phasellus et elementum. Placerat a scelerisque pulvinar ut. Aliquam facilisis eget id id volutpat tortor, enim habitasse velit. Libero lectus et tellus sit lacus, tellus risus, faucibus ligula. Laoreet mi purus, pellentesque lacus sagittis, praesent sit hac. Consequat sed magna ac amet, nunc quam fermentum quis. Dui, fusce ac cum blandit massa felis pretium. Laoreet sit magna tortor sed cras risus. Eget faucibus sit egestas tortor sed pulvinar facilisis purus. Amet sapien elementum, ipsum maecenas.'},
]
