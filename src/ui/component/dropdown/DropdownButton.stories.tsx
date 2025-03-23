import type {Meta, StoryObj} from '@storybook/react'
import DropdownButton from '@/ui/component/dropdown/DropdownButton'
import {ArrowRightCircleIcon, UserPlusIcon} from '@heroicons/react/16/solid'
import {DocumentDuplicateIcon} from '@heroicons/react/24/outline'
import {HeartIcon, TrashIcon} from '@storybook/icons'
import {ChevronDownIcon} from '@heroicons/react/20/solid'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof DropdownButton> = {
    title: 'Elements/DropdownButton',
    component: DropdownButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: { title: 'Settings', options: [] },
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        title: 'Settings',
        tailingIcon: ChevronDownIcon,
        options: [
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

export const IconOnly: Story = {
    args: {
        title: '',
        tailingIcon: ChevronDownIcon,
        options: [
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

export const WithGrouping: Story = {
    args: {
        title: 'Options',
        tailingIcon: ChevronDownIcon,
        options: [
            [
                {
                    title: 'Item 1',
                    icon: DocumentDuplicateIcon,
                },
                {
                    title: 'Item 2',
                    icon: ArrowRightCircleIcon,
                },
            ],
            [
                { title: 'Item 3', icon: UserPlusIcon },
                { title: 'Item 4', icon: HeartIcon },
            ],
            [{ title: 'Item 5', icon: TrashIcon }],
        ],
    },
}
