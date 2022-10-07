import React, { MutableRefObject, ReactNode, useRef } from 'react'
import cx from 'classnames'
import { NextImage as Image } from '../Image'

type TableKeyType<T> = keyof T | null

type TableProps<T> = {
    refs?: MutableRefObject<Record<string, HTMLInputElement>>
    headers: Array<string>
    keys: Array<TableKeyType<T>>
    rows: Array<T>
    uniqueKey: keyof T
    selectable?: boolean
    headerBackground?: boolean
    children?: ReactNode
    className?: string
    headerClassName?: string
    bodyClassName?: string
    setId?: (id: string) => void
    onSelect?: (id: string, isChecked: boolean) => void
    onSelectAll?: (ids: Array<string>, isChecked: boolean) => void
}

const tdValue = <T,>({ k, row }: { k: TableKeyType<T>; row: T }) => {
    if (!k) {
        return ''
    }

    if (k.toString().includes('image') || k.toString().includes('url')) {
        return <Image src={`${row[k]}`} width={50} height={50} alt="item-avatar" className="h-12 w-12" />
    }

    return row[k]
}

export const Table = <T,>({
    refs = { current: {} },
    children,
    className,
    headerClassName,
    bodyClassName,
    headers,
    keys,
    uniqueKey,
    selectable,
    headerBackground,
    rows,
    setId = () => null,
    onSelect = () => null,
    onSelectAll = () => null,
}: TableProps<T>) => {
    const selectAllRef = useRef<HTMLInputElement>(null)

    return (
        <div>
            <table width="100%" className={cx(className)}>
                <thead
                    className={cx(
                        headerClassName,
                        headerBackground ? 'bg-white text-black' : 'bg-hypay-primary text-white'
                    )}
                >
                    <tr>
                        {selectable ? (
                            <th className="pr-2">
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 cursor-pointer border-[5px] border-black"
                                    ref={selectAllRef}
                                    onChange={(e) => {
                                        onSelectAll(
                                            rows.map((row) => {
                                                refs.current[`${row[uniqueKey]}`].checked = e.currentTarget.checked
                                                return `${row[uniqueKey]}`
                                            }),
                                            e.currentTarget.checked
                                        )
                                    }}
                                />
                            </th>
                        ) : null}
                        {headers.map((title, i) => {
                            const isLast = i === keys?.length - 1
                            return (
                                <th key={`th-${i}`}>
                                    <div className={cx('max-w-[95%] truncate text-left', isLast && 'pr-4', 'py-4')}>
                                        {title}
                                    </div>
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody className={cx(bodyClassName, 'bg-white text-left text-sm')}>
                    {rows.map((row, i) => (
                        <tr key={`tr-${i}`}>
                            {selectable ? (
                                <td className="pr-2">
                                    <div className="flex items-center justify-center">
                                        <input
                                            ref={(element) =>
                                                (refs.current[`${row[uniqueKey]}`] = element as HTMLInputElement)
                                            }
                                            type="checkbox"
                                            className="h-4 w-4 cursor-pointer border-[5px] border-black"
                                            onChange={(e) => {
                                                if (!e.currentTarget.checked) {
                                                    ;(selectAllRef.current as HTMLInputElement).checked = false
                                                }
                                                onSelect(`${row[uniqueKey]}`, e.currentTarget.checked)
                                            }}
                                        />
                                    </div>
                                </td>
                            ) : null}
                            {keys.map((k, j) => {
                                const isLast = j === keys?.length - 1
                                return (
                                    <td
                                        className={cx(j === 0 && !selectable && 'pl-4', isLast && 'pr-4', 'py-2')}
                                        key={`td-${j}`}
                                        onMouseOver={() => setId(`${row[uniqueKey]}`)}
                                    >
                                        {isLast ? children : tdValue<T>({ k, row })}
                                    </td>
                                )
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
