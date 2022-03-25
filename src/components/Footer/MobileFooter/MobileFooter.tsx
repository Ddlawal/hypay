import { COLORS } from '../../../lib/constants/colors'
import { CommentIcon, HomeIcon, SettingsIcon, TagIcon } from '../../Icons'

const footerItems = [
    {
        icon: <HomeIcon color={COLORS.PINK} size={22} />,
        text: 'Home',
    },
    {
        icon: <TagIcon color={COLORS.PINK} size={22} />,
        text: 'Cupons',
    },
    {
        icon: <CommentIcon color={COLORS.PINK} size={22} />,
        text: 'Mensagens',
    },
    {
        icon: <SettingsIcon color={COLORS.PINK} size={22} />,
        text: 'Configuração',
    },
]

export const MobileFooter = () => {
    return (
        <div className="fixed bottom-0 flex w-full items-center justify-between bg-white px-4 py-2 text-[0.7rem] font-bold text-hypay-pink">
            {footerItems.map(({ text, icon }) => (
                <div className="flex flex-col items-center gap-0.5">
                    {icon}
                    <div>{text}</div>
                </div>
            ))}
        </div>
    )
}
