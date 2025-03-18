'use client'

import {useState} from 'react'
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
} from '@headlessui/react'
import {
    Bars3Icon,
    BellIcon,
    CalendarIcon,
    ChartPieIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import {ChevronDownIcon, MagnifyingGlassIcon} from '@heroicons/react/20/solid'
import SidebarNav from "@/ui/component/navigation/SidebarNav";
import {NavigationItem} from "@/ui/component/navigation/type";

const navigation: NavigationItem[] = [
    {name: 'Dashboard', href: '#', icon: HomeIcon, isCurrent: true},
    {name: 'Team', href: '#', icon: UsersIcon, isCurrent: false},
    {name: 'Projects', href: '#', icon: FolderIcon, isCurrent: false},
    {name: 'Calendar', href: '#', icon: CalendarIcon, isCurrent: false},
    {name: 'Documents', href: '#', icon: DocumentDuplicateIcon, isCurrent: false},
    {name: 'Reports', href: '#', icon: ChartPieIcon, isCurrent: false},
]

const userNavigation = [
    {name: 'Your profile', href: '#'},
    {name: 'Sign out', href: '#'},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Layout = ({children}) => {

    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
            <div>
                {/* mobile view */}
                <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 md:hidden w-50">
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
                                <div
                                    className="absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0">
                                    <button type="button" onClick={() => setSidebarOpen(false)}
                                            className="-m-2.5 p-2.5">
                                        <span className="sr-only">Close sidebar</span>
                                        <XMarkIcon aria-hidden="true" className="size-6 text-white"/>
                                    </button>
                                </div>
                            </TransitionChild>

                            <SidebarNav className={'p-6'}
                                        items={navigation}
                                        logoUrl={'https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=white'}>
                            </SidebarNav>
                        </DialogPanel>
                    </div>
                </Dialog>

                {/* Static sidebar for desktop */}
                <div className="hidden md:w-50 lg:w-72 md:fixed md:inset-y-0 md:z-50 md:flex md:flex-col">
                    <SidebarNav className={'p-6'}
                                items={navigation}
                                logoUrl={'https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=white'}>
                    </SidebarNav>
                </div>

                <div className='md:pl-50 lg:pl-72'>
                    {/* top search bar*/}
                    <div
                        className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-xs sm:gap-x-6 sm:px-6 lg:px-8">
                        <button type="button" onClick={() => setSidebarOpen(true)}
                                className="-m-2.5 p-2.5 text-gray-700 md:hidden">
                            <span className="sr-only">Open sidebar</span>
                            <Bars3Icon aria-hidden="true" className="size-6"/>
                        </button>

                        {/* Separator */}
                        <div aria-hidden="true" className="h-6 w-px bg-gray-900/10 md:hidden"/>

                        <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                            <form action="#" method="GET" className="grid flex-1 grid-cols-1">
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
                                <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon aria-hidden="true" className="size-6"/>
                                </button>

                                {/* Separator */}
                                <div aria-hidden="true" className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"/>

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative">
                                    <MenuButton className="-m-1.5 flex items-center p-1.5">
                                        <span className="sr-only">Open user menu</span>
                                        <img
                                            alt=""
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            className="size-8 rounded-full bg-gray-50"
                                        />
                                        <span className="hidden lg:flex lg:items-center">
                      <span aria-hidden="true" className="ml-4 text-sm/6 font-semibold text-gray-900">
                        Tom Cook
                      </span>
                      <ChevronDownIcon aria-hidden="true" className="ml-2 size-5 text-gray-400"/>
                    </span>
                                    </MenuButton>
                                    <MenuItems
                                        transition
                                        className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 ring-1 shadow-lg ring-gray-900/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                    >
                                        {/*{userNavigation.map((item) => (*/}
                                        {/*    // <div key={item.name}>*/}
                                        {/*    //    */}
                                        {/*    // </div>*/}
                                        {/*    // <MenuItem key={item.name}>*/}
                                        {/*    //     <a*/}
                                        {/*    //         href={item.href}*/}
                                        {/*    //         className="block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden"*/}
                                        {/*    //     >*/}
                                        {/*    //         {item.name}*/}
                                        {/*    //     </a>*/}
                                        {/*    // </MenuItem>*/}
                                        {/*))}*/}
                                    </MenuItems>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <main className="py-2 md:py-5 lg:py-10">
                        <div className="px-4 sm:px-6 lg:px-8">{children}</div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default Layout