'use client'

import { clsx } from 'clsx'
import IconButton from '@/ui/component/button/IconButton'
import { ArrowUpIcon, PlusIcon } from '@heroicons/react/24/outline'

type NewChatPaletteProps = {}

const NewChatPalette = () => {
    return (
        <div
            className={
                'flex max-w-3xl flex-1 grow flex-col items-center space-y-4'
            }
        >
            <h1 className={'text-2xl font-bold text-gray-900'}>
                What can I help with?
            </h1>
            <form action={'#'} className={'relative w-full'}>
                <div
                    className={
                        'rounded-2xl bg-white shadow-lg outline-1 outline-offset-1 outline-zinc-300'
                    }
                >
                    <textarea
                        id="chat"
                        name="new_chat"
                        rows={2}
                        placeholder="Ask Anything"
                        className={clsx(
                            'block w-full resize-none bg-transparent px-5 py-3 focus:outline-none',
                            'text-base text-zinc-950 placeholder:text-gray-400'
                        )}
                        defaultValue={''}
                    />
                    {/* button group */}
                    <div className={'flex justify-between px-3 py-3'}>
                        <div className={'inline-flex space-x-2'}>
                            <IconButton
                                icon={PlusIcon}
                                size={'sm'}
                                variant={'secondary'}
                            />
                        </div>
                        <div className={'inline-flex space-x-2'}>
                            <IconButton icon={ArrowUpIcon} size={'sm'} />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default NewChatPalette