import { useState } from "react"
import { useAppDispatch } from "../utils/hooks"
import { appSlice, fetchMessages } from "../store/reducers/AppSlice"


const ChatForm = () => {
	const [value, setValue] = useState('')
	const dispatch = useAppDispatch()
	const { addMessage } = appSlice.actions;
	const sendMessage = () => {
		dispatch(addMessage({ role: 'user', content: value }))

		dispatch(fetchMessages())
	}


	return (
		<div className='flex justify-between p-4 bg-inherit'>
			<textarea value={value} onChange={(e) => setValue(e.target.value)} className='bg-gray-300 grow h-full resize-none rounded-l-lg p-2' />
			<button className='bg-[#10a37f] rounded-l-none' onClick={sendMessage}>Run ⌘⏎</button>
		</div>
	)
}

export default ChatForm