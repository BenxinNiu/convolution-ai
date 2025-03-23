import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import React from 'react'
import { clsx } from 'clsx'

export type DropdownProps = {
    options: DropdownOptionProps[] | DropdownOptionProps[][]
    children?: React.ReactNode
} & React.ComponentPropsWithoutRef<'button'>

export type DropdownOptionProps = {
    title: string
    icon?: React.ElementType
} & React.ComponentPropsWithoutRef<'a'>

const Dropdown = ({ options, children, className }: DropdownProps) => {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <MenuButton className={className}>{children}</MenuButton>
            </div>

            <DropdownOptionList options={options} />
        </Menu>
    )
}

export const DropdownOptionList = ({
    options,
}: {
    options: DropdownProps['options']
}) => {
    const showGrouping = options.find((option) => Array.isArray(option))
    return (
        <MenuItems
            transition
            className={clsx(
                'absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white',
                'shadow-lg ring-1 ring-black/5 transition focus:outline-hidden',
                'data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in',
                {
                    'divide-y divide-zinc-100': showGrouping,
                }
            )}
        >
            {options.map((option, index) => {
                if (Array.isArray(option)) {
                    return (
                        <div
                            key={`dropdown-option-group-${index}`}
                            className="py-1"
                        >
                            {option.map((subOption, i) => (
                                <DropdownOption
                                    key={`dropdown-option-${i}`}
                                    option={subOption}
                                />
                            ))}
                        </div>
                    )
                }

                return (
                    <DropdownOption
                        key={`dropdown-option-${index}`}
                        option={option}
                    />
                )
            })}
        </MenuItems>
    )
}

export const DropdownOption = ({ option }: { option: DropdownOptionProps }) => {
    return (
        <MenuItem>
            <a
                {...option}
                className={clsx(
                    'group mt-2 flex items-center px-4 py-2 text-sm text-zinc-700',
                    'data-focus:bg-zinc-100 data-focus:text-zinc-900 data-focus:outline-hidden',
                    'hover:cursor-pointer'
                )}
            >
                {option.icon && (
                    <option.icon
                        aria-hidden="true"
                        className="mr-3 size-5 text-zinc-400 group-data-focus:text-zinc-500"
                    />
                )}
                {option.title}
            </a>
        </MenuItem>
    )
}

export default Dropdown