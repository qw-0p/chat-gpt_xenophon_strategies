import React from 'react'
import { IMessage } from '../models/IMessage'


const ChatMessage: React.FC<IMessage> = ({ role, content }) => {
	return (
		<div className='flex mb-2'>
			<div className='border-2  w-full p-2 rounded-lg '>
				<p className='uppercase'>{role}</p>
				<p className=''>{content}</p>
			</div>
		</div>
	)
}

export default ChatMessage