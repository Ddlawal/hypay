import * as React from 'react'
import { COLORS } from '../../../lib/constants/colors'
import { CommentIcon, HomeIcon, SettingsIcon, TagIcon } from '../../Icons'
import { NextLink } from '../../Links'

const footerItems = [
    {
        icon: <HomeIcon color={COLORS.PINK} size={22} />,
        text: 'Home',
        link: '/dashboard/home',
    },
    {
        icon: <TagIcon color={COLORS.PINK} size={22} />,
        text: 'Coupons',
        link: '/dashboard/coupons/discounts',
    },
    {
        icon: <CommentIcon color={COLORS.PINK} size={22} />,
        text: 'Mensagens',
        link: '/dashboard/messages',
    },
    {
        icon: <SettingsIcon color={COLORS.PINK} size={22} />,
        text: 'Configuração',
        link: '/dashboard/settings',
    },
]

export const MobileFooter = () => {
    return (
        <div className="fixed bottom-0 flex w-full items-center justify-between bg-white px-4 py-2 text-[0.7rem] font-bold text-hypay-pink md:hidden">
            {footerItems.map(({ text, icon, link }, i) => (
                <NextLink href={link} key={`item-${i}`} className="flex flex-col items-center gap-0.5">
                    {icon}
                    <div>{text}</div>
                </NextLink>
            ))}
        </div>
    )
}
