import React from 'react'
import { PrimaryLayout } from '../../../components/Layout/PrimaryLayout'
import { NextPage } from 'next'
import { Card } from '../../../components/Card'
import { LoaderIcon, PaintIcon, RoundedCheckIcon } from '../../../components/Icons'
import { COLORS } from '../../../lib/constants/colors'
import Image from 'next/image'
import { NextLink } from '../../../components/Links'
import { ISingleTheme, ITheme } from '../../../interfaces/onlineStore'
import useTheme from '../../../hooks/useTheme'

const OnlineStore: NextPage = () => {
    const { loadingTheme, themeData, selectedTheme, updateTheme, setThemeLoading } = useTheme()

    const handleChangeTheme = (id: string) => {
        updateTheme(id)
    }
    return (
        <PrimaryLayout currentTabIndex={4}>
            <div className="py-4 px-4 md:px-12">
                <div className="mb-4 items-center justify-between md:flex">
                    <h1 className="text-2xl font-bold capitalize">Temas</h1>
                </div>
                <div className="mt-3 mb-5">
                    <Card
                        rounded
                        elevation="xl"
                        className="flex w-min shrink-0 items-center gap-x-2 md:w-2/12 md:shrink"
                        padding="py-2 px-3"
                    >
                        <PaintIcon color={COLORS.PINK} size={28} />
                        <span className="text-sm capitalize md:text-base">Personalizar página</span>
                    </Card>
                </div>
                {loadingTheme ? (
                    <div className="flex h-[30vh] w-full flex-col items-center justify-center">
                        <LoaderIcon />
                        <p className="font-b0ld text-center text-base">loading themes...</p>
                    </div>
                ) : (
                    <div>
                        <div className="mb-5 flex items-center justify-between">
                            <h6 className="text-lg font-bold capitalize">Escolha seu template favorito</h6>
                            {setThemeLoading && <span>Updating your theme selection ...</span>}
                        </div>

                        <div className="flex flex-col items-start justify-center md:flex-row md:items-center md:justify-between">
                            {themeData?.themes.map((theme: ISingleTheme) => (
                                <div
                                    key={theme.bg_color}
                                    className={`my-3 mx-auto flex transform cursor-pointer flex-col items-center justify-center text-center transition duration-500 hover:scale-110 md:mx-0 md:my-0 ${
                                        selectedTheme?.id == theme.id ? 'scale-110' : ''
                                    }`}
                                >
                                    <div
                                        onClick={() => handleChangeTheme(`${theme.id}`)}
                                        style={{ backgroundColor: `${theme.bg_color}`, color: `${theme.color}` }}
                                        className={`relative grid h-[200px] w-[300px] place-items-center rounded-md text-center `}
                                    >
                                        <p>Text Color</p>
                                        {selectedTheme?.id === theme.id && (
                                            <span className="dlex absolute top-3 right-5 h-5 w-5 items-center justify-center rounded-full">
                                                <RoundedCheckIcon color="white" />
                                            </span>
                                        )}
                                    </div>
                                    <p
                                        className={`text-bold mt-2 capitalize ${
                                            selectedTheme?.name === theme.name ? 'font-bold' : ''
                                        }`}
                                    >
                                        {theme.name}
                                    </p>
                                </div>
                            ))}

                            {/* these commented code link to the individua seleceted them but since we arent clear how that works for now 
                                a user wunt be routed there for now
                                */}
                            {/* <NextLink href="onlineStore/1">
                                <Image
                                    className="cursor-pointer transition-transform hover:scale-105"
                                    src="/images/firstThemeTemplate.png"
                                    width="300"
                                    height="300"
                                    alt="theme"
                                    bg-${themeData?.theme[0].bg_color}
                                />
                            </NextLink> */}

                            {/* <NextLink href="onlineStore/2">
                                <Image
                                    className="cursor-pointer transition-transform hover:scale-105"
                                    src="/images/secThemeTemplate.png"
                                    width="300"
                                    height="300"
                                    alt="theme"
                                />
                            </NextLink>
                            <NextLink href="onlineStore/3">
                                <Image
                                    className="cursor-pointer transition-transform hover:scale-105"
                                    src="/images/thirdThemeTemplate.png"
                                    width="300"
                                    height="300"
                                    alt="theme"
                                />
                            </NextLink> */}
                        </div>
                    </div>
                )}
            </div>
        </PrimaryLayout>
    )
}

export default OnlineStore
