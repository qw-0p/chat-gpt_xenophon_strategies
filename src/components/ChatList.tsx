import ChatMessage from './ChatMessage'
import { useAppSelector } from '../utils/hooks'


const ChatList = () => {
	const { messages } = useAppSelector(state => state)

	return (
		<div className='grow  h-full flex flex-col justify-end overflow-y-auto'>
			<div className='h-full p-4 max-sm:overflow-scroll'>
				{
					messages.map((message, index) => {
						return (
							<ChatMessage key={index} content={message.content} role={message.role} />
						)
					})
				}
			</div>
		</div>
	)
}

export default ChatList