import React from "react";
import {clsx} from "clsx";

type AvatarProps = {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    variant?: 'rounded' | 'circle';
} & React.ComponentPropsWithoutRef<'img'>
const Avatar = ({className, src, size = 'sm', variant = 'default', alt}: AvatarProps) => {
    return (
        <>
            {src && (
                <span className='relative inline-block'>
                    <img
                        alt={alt}
                        src{src}
                        className={clsx(
                            {
                                'h-6 w-6': size === 'xs',
                                'h-8 w-8': size === 'sm',
                                'h-10 w-10': size === 'md',
                                'h-12 w-12': size === 'lg',
                                'h-14 w-14': size === 'xl',
                                'h-16 w-16': size === 'xxl',
                            },
                            {
                                'rounded-md': variant === 'default',
                                'rounded-full': variant === 'circle',
                            },
                            className ?? ''
                        )
                        }
                    />
                </span>
            )}

            {!src && (
                <span className="inline-flex size-6 items-center justify-center rounded-full bg-gray-500">
                    <span className="text-xs font-medium text-white">TW</span>
                </span>
            )}
        </>

    );
}

Avatar.displayName = 'Avatar'
export default Avatar