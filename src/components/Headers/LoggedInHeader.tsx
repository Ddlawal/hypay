import React, { useState } from 'react'
import { COLORS } from '../../lib/constants/colors'
import { TextField } from '../form'
import { SearchIcon } from '../Icons'

export const LoggedInHeader = () => {
    const [searchString, setSearchString] = useState('')
    return (
        <div className="flex items-center justify-end bg-white py-4 px-8">
            <div>
                <TextField
                    value={searchString}
                    onChange={(input) => setSearchString(input)}
                    inputClassName="bg-hypay-light-gray"
                    placeholder="Search"
                    inputIcon={<SearchIcon color={COLORS.PLACEHOLDER} />}
                />
            </div>
        </div>
    )
}
