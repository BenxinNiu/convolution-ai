'use client'

import { useState } from 'react'
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    TransitionChild,
} from '@headlessui/react'
import {
    ArrowLeftIcon,
    Bars3Icon,
    BellIcon,
    CalendarIcon,
    ChartPieIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    SquaresPlusIcon,
    UsersIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import SidebarNav from '@/ui/component/navigation/SidebarNav'
import { NavigationItem } from '@/ui/component/navigation/type'
import clsx from 'clsx'
import IconButton from '@/ui/component/button/IconButton'
import Container from '@/ui/component/container/Container'
import Avatar from '@/ui/component/avatar/Avatar'
import Dropdown, { DropdownOptionProps } from '@/ui/component/dropdown/Dropdown'

const navigation: NavigationItem[] = [
    { name: 'Dashboard', href: '#', icon: HomeIcon, isCurrent: true },
    { name: 'Team', href: '#', icon: UsersIcon, isCurrent: false },
    { name: 'Projects', href: '#', icon: FolderIcon, isCurrent: false },
    { name: 'Calendar', href: '#', icon: CalendarIcon, isCurrent: false },
    {
        name: 'Documents',
        href: '#',
        icon: DocumentDuplicateIcon,
        isCurrent: false,
    },
    { name: 'Reports', href: '#', icon: ChartPieIcon, isCurrent: false },
]

const userNavigation: DropdownOptionProps[] = [
    { title: 'Your profile', href: '#', icon: UsersIcon },
    { title: 'Sign out', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Layout = ({ children }) => {
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
    const [expanded, setExpanded] = useState(true)

    return (
        <div>
            {/* mobile sidebar view */}
            <Dialog
                open={mobileSidebarOpen}
                onClose={setMobileSidebarOpen}
                className="relative z-50 w-50 md:hidden"
            >
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"
                />

                <div className="fixed inset-0 flex">
                    <DialogPanel
                        transition
                        className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full"
                    >
                        <TransitionChild>
                            <div className="absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0">
                                <button
                                    type="button"
                                    onClick={() => setMobileSidebarOpen(false)}
                                    className="-m-2.5 p-2.5"
                                >
                                    <span className="sr-only">
                                        Close sidebar
                                    </span>
                                    <XMarkIcon
                                        aria-hidden="true"
                                        className="size-6 text-white"
                                    />
                                </button>
                            </div>
                        </TransitionChild>

                        <SidebarNav
                            className={'bg-stone-100 p-6'}
                            items={navigation}
                            logoUrl={
                                'https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=white'
                            }
                        ></SidebarNav>
                    </DialogPanel>
                </div>
            </Dialog>

            {/* Static sidebar for desktop */}
            <div
                className={clsx(
                    'transition-width fixed inset-y-0 z-50 hidden flex-col duration-300 md:flex',
                    {
                        'md:w-50 lg:w-72': expanded,
                        'w-23': !expanded,
                    }
                )}
            >
                <div
                    className={
                        'absolute top-2 flex w-full justify-between space-x-2 px-6 py-2'
                    }
                >
                    <IconButton
                        className={clsx('transition-transform duration-300', {
                            'rotate-y-180': !expanded,
                            'rotate-0': expanded,
                        })}
                        size={'xl'}
                        onClick={() => setExpanded(!expanded)}
                        icon={ArrowLeftIcon}
                    ></IconButton>

                    <IconButton
                        className={clsx({ hidden: !expanded })}
                        size={'xl'}
                        // onClick={() => setExpanded(!expanded)}
                        icon={SquaresPlusIcon}
                    ></IconButton>
                </div>

                <SidebarNav
                    className={'bg-stone-100 px-6 py-16'}
                    items={navigation}
                ></SidebarNav>
            </div>

            {/* content area */}
            <div
                className={clsx('transition-padding duration-300', {
                    'md:pl-50 lg:pl-72': expanded,
                    'md:pl-23': !expanded,
                })}
            >
                {/* top search bar*/}
                <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-xs sm:gap-x-6 sm:px-6 lg:px-8">
                    <button
                        type="button"
                        onClick={() => setMobileSidebarOpen(true)}
                        className="-m-2.5 p-2.5 text-gray-700 md:hidden"
                    >
                        <span className="sr-only">Open sidebar</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>

                    {/* Separator */}
                    <div
                        aria-hidden="true"
                        className="h-6 w-px bg-gray-900/10 md:hidden"
                    />

                    <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                        <form
                            action="#"
                            method="GET"
                            className="grid flex-1 grid-cols-1"
                        >
                            <input
                                name="search"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                className="col-start-1 row-start-1 block size-full bg-white pl-8 text-base text-gray-900 outline-hidden placeholder:text-gray-400 sm:text-sm/6"
                            />
                            <MagnifyingGlassIcon
                                aria-hidden="true"
                                className="pointer-events-none col-start-1 row-start-1 size-5 self-center text-gray-400"
                            />
                        </form>
                        <div className="flex items-center gap-x-4 lg:gap-x-6">
                            <button
                                type="button"
                                className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
                            >
                                <span className="sr-only">
                                    View notifications
                                </span>
                                <BellIcon
                                    aria-hidden="true"
                                    className="size-6"
                                />
                            </button>

                            {/* Separator */}
                            <div
                                aria-hidden="true"
                                className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
                            />

                            {/* Profile dropdown */}
                            <Dropdown
                                options={userNavigation}
                                className="-m-1.5 flex items-center p-1.5 hover:cursor-pointer"
                            >
                                <span className="sr-only">Open user menu</span>
                                <Avatar
                                    // src={
                                    //     'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                                    // }
                                    size={'md'}
                                    variant={'rounded'}
                                    alt={'User profile'}
                                    username={'Benxin Niu'}
                                />
                                <span className="hidden lg:flex lg:items-center">
                                    <span
                                        aria-hidden="true"
                                        className="ml-4 text-sm/6 font-semibold text-gray-900"
                                    >
                                        Username
                                    </span>
                                    <ChevronDownIcon
                                        aria-hidden="true"
                                        className="ml-2 size-5 text-gray-400"
                                    />
                                </span>
                            </Dropdown>
                        </div>
                    </div>
                </div>

                <main className="py-2 md:py-5 lg:py-10">
                    <Container variant={'padded'}>{children}</Container>
                </main>
            </div>
        </div>
    )
}

export default Layout