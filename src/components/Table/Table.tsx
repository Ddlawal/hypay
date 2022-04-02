import React, { FC, ReactNode } from 'react'
import { ProductsType } from '../../interfaces/products'

type TableProps = {
    children: ReactNode
    headers: Array<string>
    keys: Array<keyof ProductsType | null>
    rows: Array<ProductsType>
}
export const Table: FC<TableProps> = ({ children, headers, keys, rows }) => {
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
                <tbody className="bg-white text-center text-sm">
                    {rows.map((row, i) => (
                        <tr key={`tr-${i}`}>
                            {keys.map((k, j) => (
                                <td className="py-2" key={`td-${j}`}>
                                    {j === keys?.length - 1 ? children : k ? row[k] : ''}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
