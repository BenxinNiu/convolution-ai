import React, { forwardRef } from 'react'
import { clsx } from 'clsx'
import { ButtonSize } from '@/ui/component/constant'

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
    variant?: 'primary' | 'secondary' | 'tertiary'
    size?: ButtonSize
    srText?: string
    icon: React.ElementType
}
const IconButton = forwardRef(
    (
        {
            size = 'md',
            srText,
            variant = 'primary',
            className,
            ...props
        }: ButtonProps,
        ref
    ) => {
        return (
            <button
                ref={ref}
                {...props}
                className={clsx(
                    {
                        'p-1': size === 'xs',
                        'p-1.5': size === 'sm',
                        'p-2': size === 'md',
                        'p-2.5': size === 'lg',
                        'p-3': size === 'xl',
                        'p-3.5': size === '2xl',
                    },
                    {
                        'rounded-full bg-zinc-800 text-zinc-100 hover:bg-zinc-600':
                            variant === 'primary',
                        'rounded-full bg-zinc-100 text-zinc-800 hover:bg-zinc-200':
                            variant === 'secondary',
                        'rounded-md bg-transparent text-zinc-600 hover:bg-zinc-200':
                            variant === 'tertiary',
                    },
                    'hover:cursor-pointer',
                    'disabled:cursor-not-allowed disabled:opacity-70',
                    'focus:outline-1 focus:outline-offset-2 focus:outline-zinc-500',
                    className ?? ''
                )}
            >
                {srText && <span className="sr-only">srText</span>}
                <div className={clsx('flex items-center justify-center')}>
                    <props.icon
                        aria-hidden="true"
                        className={clsx({
                            'h-5 w-5': size === 'xs',
                            'h-6 w-6': size === 'sm',
                            'h-7 w-7': size === 'md',
                            'h-8 w-8': size === 'lg',
                            'h-9 w-9': size === 'xl',
                            'h-11 w-11': size === '2xl',
                        })}
                    />
                </div>
            </button>
        )
    }
)

IconButton.displayName = 'IconButton'

export default IconButton