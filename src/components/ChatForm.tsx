import React from 'react'

type Props = {}

const ChatForm = (props: Props) => {
	return (
		<div className='min-h-[96px] flex justify-between pt-10'>
			<textarea className='bg-gray-300 grow h-full resize-none rounded-l-lg p-2' />
			<button className='bg-[#10a37f] rounded-l-none'>Run ⌘⏎</button>
		</div>
	)
}

export default ChatForm