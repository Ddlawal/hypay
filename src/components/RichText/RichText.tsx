import React, { Dispatch, FC, MouseEventHandler } from 'react'
import { Editor, EditorState, RichUtils } from 'draft-js'
import 'draft-js/dist/Draft.css'

import { Card } from '../Card'
import {
    RTAlignCenterIcon,
    RTAlignJustifyIcon,
    RTAlignLeftIcon,
    RTAlignRightIcon,
    RTBoldIcon,
    RTColorIcon,
    RTItalicIcon,
    RTLinkIcon,
    RTStrikeThroughIcon,
    RTUnderlineIcon,
} from '../Icons'

type TextStyle = 'BOLD' | 'ITALIC' | 'UNDERLINE' | 'STRIKETHROUGH'

type RTButtonProps = {
    textStyle: TextStyle
    active: boolean
    onToggle: (style: TextStyle) => void
}

type RichTextProps = {
    editorState: EditorState
    setEditorState: Dispatch<React.SetStateAction<EditorState>>
}

const RTButton: FC<RTButtonProps> = ({ children, textStyle, active, onToggle }) => {
    const onToggleHandler: MouseEventHandler<HTMLSpanElement> = (e) => {
        e.preventDefault()
        onToggle(textStyle)
    }

    let className = 'RichEditor-RTButton'
    if (active) {
        className += ' RichEditor-activeButton'
    }

    return (
        <span className={className} onMouseDown={onToggleHandler}>
            {children}
        </span>
    )
}

const RichTextControls = ({
    editorState,
    onToggle,
}: {
    editorState: EditorState
    onToggle: (style: TextStyle) => void
}) => {
    const currentStyle = editorState.getCurrentInlineStyle()

    return (
        <div className="mb-4 flex gap-3">
            <RTButton key="Italic" active={currentStyle.has('ITALIC')} onToggle={onToggle} textStyle="ITALIC">
                <RTItalicIcon />
            </RTButton>
            <RTButton key="Bold" active={currentStyle.has('BOLD')} onToggle={onToggle} textStyle="BOLD">
                <RTBoldIcon />
            </RTButton>
            <RTButton key="Underline" active={currentStyle.has('UNDERLINE')} onToggle={onToggle} textStyle="UNDERLINE">
                <RTUnderlineIcon />
            </RTButton>
            <RTButton
                key="StrikeThrough"
                active={currentStyle.has('STRIKETHROUGH')}
                onToggle={onToggle}
                textStyle="STRIKETHROUGH"
            >
                <RTStrikeThroughIcon />
            </RTButton>
            <RTLinkIcon />
            <RTColorIcon />
            <RTAlignLeftIcon />
            <RTAlignCenterIcon />
            <RTAlignRightIcon />
            <RTAlignJustifyIcon />
        </div>
    )
}

const RichText = ({ editorState, setEditorState }: RichTextProps) => {
    const onChange = (editorState: EditorState) => setEditorState(editorState)

    const onToggleRTIconBtn = (style: TextStyle) => onChange(RichUtils.toggleInlineStyle(editorState, style))

    return (
        <Card className="text-sm shadow-md" rounded>
            <RichTextControls editorState={editorState} onToggle={onToggleRTIconBtn} />
            <div className="h-24">
                <Editor editorState={editorState} onChange={setEditorState} placeholder="Write your message here..." />
            </div>
        </Card>
    )
}

export default RichText
