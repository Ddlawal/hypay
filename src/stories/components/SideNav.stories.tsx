import React, { useState } from 'react'
import { SideNav } from '../../components/Layout'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { COLORS } from '../../lib/constants/colors'
import { Logo } from '../../components/Logo'
import { MenuItemList } from '../../lib/data'
import cx from 'classnames'

export default {
    title: 'pages/SideNav',
    component: SideNav,
    argTypes: {
        clipped: {
            description: 'Show progress bar beyond events',
            options: [true, false],
            control: { type: 'radio' },
        },
    },
} as ComponentMeta<typeof SideNav>

const Template: ComponentStory<typeof SideNav> = (args) => {
    const [activeTab, setActivetab] = useState(0)

    const changeTab = (i: number) => {
        setActivetab(i)
    }

    const settingsIndex = MenuItemList.length - 1

    return (
        <div className="items-normal flex h-screen min-h-screen w-full max-w-[188px] flex-col justify-between bg-[#36076B] ">
            <header className="flex w-full items-center justify-center p-4">
                <Logo labelled={{ labelPosition: 'right' }} labelColor={'text-white'} color={COLORS.WHITE} />
            </header>

            <main className="flex w-full flex-1 items-center">
                <div className="h-max w-full">
                    {MenuItemList.slice(0, -1).map((item, index) => {
                        return (
                            <MenuItem
                                key={`menu-${index}`}
                                {...item}
                                parentIndex={index}
                                isActive={index === activeTab}
                                setActive={changeTab}
                            />
                        )
                    })}
                </div>
            </main>

            <div className="w-full ">
                <MenuItem
                    key={`menu-${settingsIndex}`}
                    {...MenuItemList[settingsIndex]}
                    isActive={settingsIndex === activeTab}
                    setActive={() => changeTab(settingsIndex)}
                />
            </div>
        </div>
    )
}

export const Basic = Template.bind({})

export const MenuItem = (props: any) => {
    const { parentIndex, text, leftIcon, rightIcon, isActive, setActive, isDropDown } = props
    const [activeChild, setActiveChild] = useState<number>(-1)
    const [showDropdown, setShowDropdown] = useState<boolean>(false)
    const changeTab = () => {
        setActive(parentIndex)
        setActiveChild(0)
        alert(activeChild)
    }
    const changeActiveChild = (i: number) => {
        setActiveChild(i)
        setActive(-1)
    }
    return (
        <div
            className={cx(
                !isDropDown ? isActive && 'bg-hypay-secondary' : '',
                `w-full cursor-pointer py-3 px-4 outline-hidden transition ease-in hover:bg-hypay-secondary`
            )}
        >
            <button
                className={`flex w-max ${isActive && isDropDown && 'pb-2'}  relative items-center gap-4 text-white`}
                onClick={isDropDown ? () => setShowDropdown(!showDropdown) : changeTab}
            >
                {leftIcon}
                <p className="">{text}</p>
                {rightIcon}
            </button>
            {showDropdown &&
                isDropDown?.map((marketType: string, i: number) => (
                    <button
                        onClick={() => changeActiveChild(i)}
                        key={marketType}
                        className={cx(
                            i === activeChild && `border-l-4 border-hypay-pink`,
                            i === activeChild && 'bg-hypay-secondary',
                            ` flex w-full cursor-pointer justify-center py-2 text-white outline-hidden transition ease-in   `
                        )}
                    >
                        {marketType}
                    </button>
                ))}
        </div>
    )
}
