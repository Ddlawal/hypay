import React, { FC } from 'react'

type TableProps = {
    headers: Array<string>
    keys: Array<string>
    rows: Array<{ [key: string]: string }>
}
export const Table: FC<TableProps> = ({ headers, keys, rows }) => {
    return (
        <div>
            <table width="100%">
                <thead className="bg-hypay-primary text-white">
                    <tr>
                        {headers.map((title, i) => (
                            <th key={`th-${i}`}>
                                <div className="p-4">{title}</div>
                            </th>
                        ))}
                    </tr>
                </thead>
            </table>
        </div>
    )
}
