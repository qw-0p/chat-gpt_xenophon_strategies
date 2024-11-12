import React from 'react'
import { IMessage } from '../models/IMessage'


const ChatMessage: React.FC<IMessage> = ({ role, content }) => {
	return (
		<div className='bg-green-400 flex' style={{ justifyContent: role === 'user' ? 'flex-end' : 'flex-start' }}>
			<div className='bg-red-300 max-w-[50%] min-w-[30%] p-2 border-2 rounded-lg '>
				<p className='uppercase'>{role}</p>
				<p className=''>{content}</p>
			</div>
		</div>
	)
}

export default ChatMessage