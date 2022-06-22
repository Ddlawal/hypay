import React, { FC, MouseEventHandler, useState } from 'react'
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

type StyleButtonProps = {
    textStyle: TextStyle
    active: boolean
    onToggle: (style: TextStyle) => void
}

const StyleButton: FC<StyleButtonProps> = ({ children, textStyle, active, onToggle }) => {
    const onToggleHandler: MouseEventHandler<HTMLSpanElement> = (e) => {
        e.preventDefault()
        onToggle(textStyle)
    }

    let className = 'RichEditor-styleButton'
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
            <StyleButton key="Italic" active={currentStyle.has('ITALIC')} onToggle={onToggle} textStyle="ITALIC">
                <RTItalicIcon />
            </StyleButton>
            <StyleButton key="Bold" active={currentStyle.has('BOLD')} onToggle={onToggle} textStyle="BOLD">
                <RTBoldIcon />
            </StyleButton>
            <StyleButton
                key="Underline"
                active={currentStyle.has('UNDERLINE')}
                onToggle={onToggle}
                textStyle="UNDERLINE"
            >
                <RTUnderlineIcon />
            </StyleButton>
            <StyleButton
                key="StrikeThrough"
                active={currentStyle.has('STRIKETHROUGH')}
                onToggle={onToggle}
                textStyle="STRIKETHROUGH"
            >
                <RTStrikeThroughIcon />
            </StyleButton>
            <RTLinkIcon />
            <RTColorIcon />
            <RTAlignLeftIcon />
            <RTAlignCenterIcon />
            <RTAlignRightIcon />
            <RTAlignJustifyIcon />
        </div>
    )
}

const RichText = () => {
    const [editorState, setEditorSatte] = useState<EditorState>(() => EditorState.createEmpty())

    console.log(editorState.getCurrentContent().getPlainText())

    const onChange = (editorState: EditorState) => setEditorSatte(editorState)

    const onToggleRTIconBtn = (style: TextStyle) => onChange(RichUtils.toggleInlineStyle(editorState, style))

    return (
        <Card className="h-[10rem] text-sm shadow-md" rounded>
            <RichTextControls editorState={editorState} onToggle={onToggleRTIconBtn} />
            <Editor editorState={editorState} onChange={setEditorSatte} placeholder="Write your message here..." />
        </Card>
    )
}

export default RichText
