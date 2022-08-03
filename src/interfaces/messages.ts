export type Message = {
    from: string
    to: string
    message: string
    attachment: string | null
    time: string
}

export type MessageThread = {
    thread_id: number
    messages: Array<Message>
}

export type GetMessageData = { thread_id: number }

export type MessageData = { message: string; attachment?: File; receiver_id: string; thread_id?: string }

export type NotificationData = {
    id: number
    user_id: number
    customer_id: number
    title: string
    description: string
    view_link: string | null
    viewed: boolean
    created_at: string
    updated_at: string
}

export type DeleteNotification = { notification_id: number }
