import ChatMessage from './ChatMessage'
import { useAppSelector } from '../utils/hooks'


const ChatList = () => {
	const messages = useAppSelector(state => state.messages)

	return (
		<div className='grow flex flex-col justify-end bg-yellow-400 overflow-y-auto'>
			<div className='h-full p-4'>
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