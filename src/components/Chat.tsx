import ChatForm from './ChatForm'
import ChatList from './ChatList'

const Chat = () => {
	return (
		<div className="bg-black w-5/6 flex flex-col justify-center ">
			<ChatList />
			<ChatForm />
		</div>
	)
}

export default Chat