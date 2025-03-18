import clsx from "clsx";
import NavbarLogo from "@/ui/component/navigation/NavbarLogo";
import {NavigationItem} from "@/ui/component/navigation/type";
import React from "react";

export type SidebarNavProps = {
    items: NavigationItem[]
    logoUrl?: string
} & React.ComponentPropsWithoutRef<'nav'>

export default function SidebarNav({items, logoUrl, children, className}: SidebarNavProps) {
    return (
        <nav className={clsx('flex grow flex-col gap-y-5 overflow-y-auto bg-stone-100 flex-1 border-r border-stone-300 shadow-xs', className)}>
            <NavbarLogo logoUrl={logoUrl}></NavbarLogo>
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                    <VerticalNavbarItems items={items}></VerticalNavbarItems>
                </li>
                <li>
                    {/* Additional group of items */}
                    {children}
                </li>
            </ul>
        </nav>
        // </div>
    );
}

export const VerticalNavbarItems = ({items, heading}: { items: NavigationItem[], heading?: string }) => {
    return (
        <>
            {heading && (
                <div className='text-xs/6 font-semibold text-stone-300'>
                    {heading}
                </div>
            )}
            <ul className={''}>
                {items.map((item) => (
                    <li key={item.name}>
                        <VerticalNavbarItem href={item.href} name={item.name} icon={item.icon}
                                            isCurrent={item.isCurrent}></VerticalNavbarItem>
                    </li>
                ))}
            </ul>
        </>
    )
}

export const VerticalNavbarItem = (item: NavigationItem) => {
    return (
        <a href={item.href}
           className={clsx('group flex gap-x-3 rounded-md p-2 mt-1 text-sm/6 font-semibold', {
               'bg-stone-700 text-white': item.isCurrent,
               'text-stone-800 hover:bg-stone-700 hover:text-white': !item.isCurrent,
           },)}>
            {item.icon && (
                <item.icon className={clsx({
                    'text-white': item.isCurrent,
                    'text-stone-700 group-hover:text-white': !item.isCurrent,
                    'size-6 shrink-0': true,
                })} aria-hidden={true}/>
            )}
            <p className={'truncate'}> {item.name} </p>
        </a>
    )
}
