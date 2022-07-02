export type Message = {
    from: string
    to: string
    message: string
    attachment: string | null
    time: string
}

export type MessageThread = {
    thread_id: number
    messages: Message[]
}

export type GetMessageData = { thread_id: number }

export type MessageData = { message: string; attachment?: File; receiver_id: string; thread_id?: string }
