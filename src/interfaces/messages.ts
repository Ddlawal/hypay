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
