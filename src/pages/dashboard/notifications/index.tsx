import { NextPage } from 'next'
import React, { MutableRefObject, useEffect, useRef, useState } from 'react'

import { NextImage as Image } from '../../../components/Image'
import { Card } from '../../../components/Card'
import { StarIcon, TrashCanIcon } from '../../../components/Icons'
import { PrimaryLayout } from '../../../components/Layout'
import { useMessages } from '../../../hooks/useMessages'
import { NotificationData } from '../../../interfaces/messages'
import { COLORS } from '../../../lib/constants/colors'
import { getDate, getDateFromDaysAgo, isDateSame } from '../../../lib/dateFns'
import { showSuccessSnackbar, showErrorSnackbar } from '../../../lib/helper'

type NotificationsByDate = {
    [K: string]: Array<NotificationData>
}

const check: { [K: string]: string } = {}

const getDateTitle = (created_at: string): string => {
    if (check[created_at]) {
        return check[created_at]
    }

    let date = ''
    const today = getDateFromDaysAgo(0)
    const yesterday = getDateFromDaysAgo(1)
    const isToday = isDateSame(created_at, today)
    const isYesterday = isDateSame(created_at, yesterday)
    const isThisYer = isDateSame(created_at, today, 'year')

    if (!isToday && !isYesterday) {
        date = isThisYer ? getDate(created_at, 'Do MMMM') : getDate(created_at, 'Do MMMM, YYYY')
    }

    if (isToday) {
        date = 'Today'
    }

    if (isYesterday) {
        date = 'Yesterday'
    }

    check[created_at] = date
    return date
}

const NotificationPage: NextPage = () => {
    const [notificationsByDate, setNotificationsByDate] = useState<NotificationsByDate>()
    const { deleteNotification, getAllNotifications, isDeletingNotification, isLoadingNotifications } = useMessages()
    const [ids, setIds] = useState<Array<number>>([])

    const notificationRefs: MutableRefObject<Record<number, HTMLInputElement>> = useRef({})

    useEffect(() => {
        const fetchData = async () => {
            try {
                const payload = await getAllNotifications().unwrap()

                if (!payload.length) {
                    return setNotificationsByDate(undefined)
                }

                const notificationObj: NotificationsByDate = {}

                for (const notification of payload) {
                    const date = getDateTitle(notification.created_at)

                    notificationObj[date] = notificationObj[date]
                        ? [...notificationObj[date], notification]
                        : [notification]
                }

                setNotificationsByDate(notificationObj)
            } catch (error) {
                console.log(error)
            }
        }

        if (!isDeletingNotification) {
            fetchData()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isDeletingNotification])

    const onSelect = (id: number, isChecked: boolean) => {
        if (isChecked) {
            return setIds((prev) => [...prev, id])
        }

        setIds((prev) => prev.filter((i) => i !== id))
    }

    const handleDelete = async (notification_id: number) => {
        const proceed = confirm('Are you sure you want to proceed?')
        if (proceed) {
            try {
                await deleteNotification({ notification_id })

                showSuccessSnackbar('Notification deleted successfully!')
            } catch (error) {
                console.log(error)
                showErrorSnackbar('Error! Unable to delete notification')
            }
        }
    }

    const handleMarkAsRead = () => {
        console.log(ids)
    }

    return (
        <PrimaryLayout isLoading={isLoadingNotifications}>
            <div className="mx-auto py-4 px-4 leading-5 md:px-8 lg:px-24">
                <div className="md:w-10/12">
                    <header className="mb-10 flex items-center justify-between md:items-center">
                        <div className="flex flex-col items-start justify-between md:w-full md:flex-row md:items-center">
                            <h2 className="text-2xl font-bold">Notificações</h2>
                            <button className="text-md mt-4 font-semibold  md:mt-0" onClick={handleMarkAsRead}>
                                Marcar todas como lida
                            </button>
                        </div>
                        <div className="mr-2 block cursor-pointer md:hidden">
                            <StarIcon size={28} />
                        </div>
                    </header>
                    <main className="">
                        {notificationsByDate ? (
                            Object.entries(notificationsByDate).map(([heading, notifications], index) => (
                                <div key={index}>
                                    <h2 className="mt-6 font-semibold">{heading}</h2>

                                    {notifications.map(({ created_at, description, id, title, viewed }, index) => (
                                        <div key={index}>
                                            <Card
                                                padding="px-2 py-3"
                                                className="relative my-3 hidden items-center justify-between gap-x-5 rounded-md shadow-xl md:flex"
                                            >
                                                {!viewed && (
                                                    <span className="absolute top-[-5px] right-0 h-3 w-3 rounded-full bg-hypay-pink"></span>
                                                )}
                                                <div className="grid grid-cols-12 items-center gap-x-2">
                                                    <div className="col-span-1">
                                                        <Image
                                                            className="rounded-[50%]"
                                                            loader={({ src }) => src}
                                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWnQScKMx5KEgFZiQtqXBFX8EuF7GI-DWfsA&usqp=CAU"
                                                            alt="avatar"
                                                            width={40}
                                                            height={40}
                                                            quality={100}
                                                            unoptimized
                                                        />
                                                    </div>
                                                    <div className="col-span-11">
                                                        <div className="mb-1 truncate">
                                                            <b>{title}:</b> {description}
                                                        </div>
                                                        <div>
                                                            <b className="text-sm text-hypay-iconGray">
                                                                {getDate(created_at, 'HH:MM')}h
                                                            </b>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex gap-x-3">
                                                    <button
                                                        className="mr-2 cursor-pointer"
                                                        onClick={() => handleDelete(id)}
                                                    >
                                                        <TrashCanIcon color={COLORS.PINK} size={18} />
                                                    </button>

                                                    <div className="mr-2  cursor-pointer">
                                                        <StarIcon size={18} />
                                                    </div>

                                                    <input
                                                        ref={(element) =>
                                                            (notificationRefs.current[id] = element as HTMLInputElement)
                                                        }
                                                        type="checkbox"
                                                        className="h-4 w-4 cursor-pointer border-[5px] border-black"
                                                        onChange={(e) => {
                                                            onSelect(id, e.currentTarget.checked)
                                                        }}
                                                    />
                                                </div>
                                            </Card>
                                            <Card
                                                className="items-between my-3 flex flex-col md:hidden"
                                                padding="p-3"
                                                rounded
                                            >
                                                <div className="grid grid-cols-12 items-center gap-x-2">
                                                    <div className="col-span-2">
                                                        <Image
                                                            className="rounded-[50%]"
                                                            loader={({ src }) => src}
                                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWnQScKMx5KEgFZiQtqXBFX8EuF7GI-DWfsA&usqp=CAU"
                                                            alt="avatar"
                                                            width={40}
                                                            height={40}
                                                            quality={100}
                                                            unoptimized
                                                        />
                                                    </div>
                                                    <div className="col-span-10">
                                                        <div className="mb-1 truncate">
                                                            <b>{title}:</b> {description}
                                                        </div>
                                                        <div className="flex items-center justify-between">
                                                            <div>
                                                                <b className="text-sm text-hypay-iconGray">
                                                                    {getDate(created_at, 'HH:MM')}h
                                                                </b>
                                                            </div>
                                                            <div className="flex gap-x-3">
                                                                <button
                                                                    className="mr-2 cursor-pointer"
                                                                    onClick={() => handleDelete(id)}
                                                                >
                                                                    <TrashCanIcon color={COLORS.PINK} size={18} />
                                                                </button>

                                                                <div className="mr-2  cursor-pointer">
                                                                    <StarIcon size={18} />
                                                                </div>
                                                                {/* TODO: change to longpress then tap on mobole */}
                                                                {/* <input
                                                                    ref={(element) =>
                                                                        (notificationRefs.current[id] =
                                                                            element as HTMLInputElement)
                                                                    }
                                                                    type="checkbox"
                                                                    className="h-4 w-4 cursor-pointer border-[5px] border-black"
                                                                    onChange={(e) => {
                                                                        onSelect(id, e.currentTarget.checked)
                                                                    }}
                                                                /> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card>
                                        </div>
                                    ))}
                                </div>
                            ))
                        ) : (
                            <div className="text-center text-hypay-pink">You don't have any notifications</div>
                        )}
                    </main>
                </div>
            </div>
        </PrimaryLayout>
    )
}

export default NotificationPage
