import React from 'react'
import ChatForm from './ChatForm'
import ChatList from './ChatList'

type Props = {}

const Chat = (props: Props) => {
	return (
		<div className="bg-black h-full w-5/6 p-4 flex flex-col align-middle justify-center">

			<ChatList />
			<ChatForm />
		</div>
	)
}

export default Chat