import React from 'react'
import { clsx } from 'clsx'

type AvatarProps = {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
    variant?: 'rounded' | 'circle'
    username?: string
} & React.ComponentPropsWithoutRef<'img'>
const Avatar = (
    {
        className,
        size = 'sm',
        variant = 'default',
        username,
        ...props
    }: AvatarProps,
    ref
) => {
    const sizeClass = clsx(
        {
            'h-6 w-6': size === 'xs',
            'h-8 w-8': size === 'sm',
            'h-10 w-10': size === 'md',
            'h-12 w-12': size === 'lg',
            'h-14 w-14': size === 'xl',
            'h-16 w-16': size === 'xxl',
        },
        {
            'rounded-md': variant === 'rounded',
            'rounded-full': variant === 'circle',
        }
    )

    return (
        <>
            {props.src && (
                <div className="relative inline-block">
                    <img
                        ref={ref}
                        {...props}
                        className={clsx(sizeClass, className ?? '')}
                    />
                </div>
            )}

            {!props.src && (
                <span
                    className={clsx(
                        'inline-flex items-center justify-center bg-zinc-500',
                        sizeClass
                    )}
                >
                    <span className="text-xs font-medium text-white">
                        {getInitials(username)}
                    </span>
                </span>
            )}
        </>
    )
}

const getInitials = (name: string | undefined) => {
    return (name ?? '')
        .split(' ')
        .map((word) => word[0].toUpperCase())
        .join('')
}

Avatar.displayName = 'Avatar'
export default Avatar