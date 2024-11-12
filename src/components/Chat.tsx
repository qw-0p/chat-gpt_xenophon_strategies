import ChatForm from './ChatForm'
import ChatList from './ChatList'

const Chat = () => {
	return (
		<div className="w-5/6 grow max-sm:w-full flex flex-col border-2 border-b-0 overflow-scroll">
			<ChatList />
			<ChatForm />
		</div>
	)
}

export default Chat