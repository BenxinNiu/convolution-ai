import React from 'react'
import { clsx } from 'clsx'
import Dropdown, { DropdownProps } from '@/ui/component/dropdown/Dropdown'

export type DropdownButtonProps = {
    options: DropdownProps['options']
    tailingIcon?: React.ElementType
    title?: string
}
const DropdownButton = ({ title, options, ...props }: DropdownButtonProps) => {
    return (
        <Dropdown
            options={options}
            className={clsx(
                'inline-flex w-full items-center justify-center gap-x-1.5 rounded-md bg-white px-3 py-2',
                'text-sm font-semibold text-zinc-900',
                'shadow-xs ring-1 ring-zinc-300 ring-inset',
                'hover:bg-zinc-50, hover:cursor-pointer'
            )}
        >
            {title}
            {props.tailingIcon && (
                <props.tailingIcon
                    className={clsx(
                        'h-6 w-6 text-center',
                        { '-mr-1': title },
                        'text-zinc-600'
                    )}
                    aria-hidden="true"
                />
            )}
        </Dropdown>
    )
}

export default DropdownButton