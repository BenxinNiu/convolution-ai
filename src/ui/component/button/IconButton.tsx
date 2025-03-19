import React, {forwardRef} from 'react'
import {clsx} from 'clsx'
import {ButtonSize} from "@/ui/component/constant";

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
    size?: ButtonSize
    srText?: string
    icon: React.ElementType
}
const IconButton = forwardRef(
    ({size = 'md', srText, className, ...props}: ButtonProps, ref) => {
        return (
            <button
                {...props}
                className={clsx(
                    className,
                    {
                        'h-5 w-5': size === 'xs',
                        'h-6 w-6': size === 'sm',
                        'h-7 w-7': size === 'md',
                        'h-8 w-8': size === 'lg',
                        'h-9 w-9': size === 'xl',
                        'h-11 w-11': size === '2xl',
                    },
                    'rounded-md',
                    'p-1',
                    `text-zinc-600`,
                    `hover:bg-zinc-200 active:bg-zinc-200`,
                    'hover:cursor-pointer',
                    'disabled:cursor-not-allowed disabled:opacity-70',
                )}
            >
                {srText && <span className="sr-only">srText</span>}
                <props.icon
                    aria-hidden="true"
                />
            </button>
        )
    }
)

IconButton.displayName = 'IconButton'

export default IconButton
