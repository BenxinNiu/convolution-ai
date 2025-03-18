import React from "react";

export type NavbarLogoProps = {
    logoUrl?: string
} & React.ComponentPropsWithoutRef<'div'>

export interface NavigationItem {
    name: string
    href: string
    groupHeading?: string
    icon?: React.ElementType
    isCurrent?: boolean
    children?: NavigationItem[]
}