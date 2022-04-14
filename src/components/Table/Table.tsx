import cx from 'classnames'
import React, { ReactNode } from 'react'

type TableProps<T> = {
    headers: Array<string>
    keys: Array<keyof T | null>
    rows: Array<T>
    uniqueKey: keyof T
    children?: ReactNode
    className?: string
    headerClassName?: string
    bodyClassName?: string
    setId?: (id: string) => void
}
export const Table = <T,>({
    children,
    className,
    headerClassName,
    bodyClassName,
    headers,
    keys,
    uniqueKey,
    rows,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setId = () => {},
}: TableProps<T>) => {
    return (
        <div>
            <table width="100%" className={cx(className)}>
                <thead className={cx(headerClassName, 'bg-hypay-primary text-white')}>
                    <tr>
                        {headers.map((title, i) => {
                            const isLast = i === keys?.length - 1
                            return (
                                <th key={`th-${i}`}>
                                    <div
                                        className={cx(
                                            'max-w-[95%] truncate',
                                            i !== 0 && 'text-left',
                                            isLast && 'pr-4',
                                            'py-4'
                                        )}
                                    >
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
                            {keys.map((k, j) => {
                                const isLast = j === keys?.length - 1
                                return (
                                    <td
                                        className={cx(j === 0 && 'pl-4', isLast && 'pr-4', 'py-2')}
                                        key={`td-${j}`}
                                        onMouseOver={() => setId(`${row[uniqueKey]}`)}
                                    >
                                        {isLast ? children : k ? row[k] : ''}
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
