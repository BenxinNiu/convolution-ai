import React, { forwardRef } from 'react'
import { clsx } from 'clsx'

type ContainerProps = {
    variant?: 'default' | 'padded' | 'container' | 'containerPadded'
} & React.ComponentPropsWithoutRef<'div'>

const Container = forwardRef(
    ({ className, variant = 'default', ...props }: ContainerProps, ref) => {
        const styles = clsx(
            {
                'mx-auto max-w-8xl sm:px-6 lg:px-8': variant === 'default',
                'mx-auto max-w-8xl px-4 sm:px-6 lg:px-8': variant === 'padded',
                'container mx-auto sm:px-6 lg:px-8': variant === 'container',
                'container mx-auto px-4 sm:px-6 lg:px-8':
                    variant === 'containerPadded',
            },
            className ?? ''
        )

        return (
            <div {...props} ref={ref} className={styles}>
                {props.children}
            </div>
        )
    }
)

Container.displayName = 'Container'

export default Container