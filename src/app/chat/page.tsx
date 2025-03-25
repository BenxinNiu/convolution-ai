import Container from '@/ui/component/container/Container'
import NewChatPalette from '@/component/chat/NewChatPalette'

const Page = () => {
    return (
        <Container variant={'container'} className={'h-[calc(100vh-4rem)]'}>
            <div
                className={
                    'flex h-full items-center justify-center overflow-y-hidden'
                }
            >
                <NewChatPalette></NewChatPalette>
            </div>
        </Container>
    )
}

export default Page