import type {Meta, StoryObj} from '@storybook/react'
import Dropdown from '@/ui/component/dropdown/Dropdown'
import {ArrowRightCircleIcon, UserPlusIcon} from '@heroicons/react/16/solid'
import {DocumentDuplicateIcon} from '@heroicons/react/24/outline'
import {HeartIcon, TrashIcon} from '@storybook/icons' // More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Dropdown> = {
    title: 'Elements/Dropdown',
    component: Dropdown,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: { title: 'Settings', items: [] },
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        title: 'Settings',
        items: [
            {
                title: 'Item 1',
                icon: DocumentDuplicateIcon,
            },
            {
                title: 'Item 2',
                icon: ArrowRightCircleIcon,
            },
            { title: 'Item 3', icon: UserPlusIcon },
            { title: 'Item 4', icon: HeartIcon },
            { title: 'Item 5', icon: TrashIcon },
        ],
    },
}
