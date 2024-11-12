import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../utils/hooks"
import { appSlice, fetchMessages } from "../store/reducers/AppSlice"


const ChatForm = () => {
	const [value, setValue] = useState('')
	const dispatch = useAppDispatch()
	const { addMessage } = appSlice.actions;
	const { status, error } = useAppSelector(state => state)
	const sendMessage = () => {
		setValue('')
		dispatch(addMessage({ role: 'user', content: value }))

		dispatch(fetchMessages())
	}


	return (
		<div className="border-y-2" >
			<div className='flex justify-between p-4 pt-8 bg-inherit'>

				<textarea placeholder={error ? error : 'Enter user message...'} value={value} onChange={(e) => setValue(e.target.value)} className={`${error && 'placeholder-error'} grow h-full resize-none rounded-l-lg p-2`} />
				<button disabled={status === 'loading'} className='bg-[#10a37f] rounded-l-none' onClick={sendMessage}>Run ⌘⏎</button>
			</div>
		</div>
	)
}

export default ChatForm