import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../utils/hooks"
import { appSlice } from "../store/reducers/AppSlice"

const Sidebar = () => {
	const [value, setValue] = useState('')
	const dispatch = useAppDispatch()
	const { addApiKey } = appSlice.actions;
	const { apiKey, status, error } = useAppSelector(state => state)

	const saveApiKey = () => {
		dispatch(addApiKey(value))
		setValue('')
	}

	const statusColors = {
		'error': 'text-red-600',
		'loading': 'text-yellow-600',
		'ok': 'text-green-600'
	}

	return (
		<div className='w-1/6 p-4 flex flex-col justify-between bg-purple-400'>
			<div>
				<div className='flex justify-center mb-2'>
					<input type='text' value={value} onChange={(e) => setValue(e.target.value)} placeholder='Enter API key...' className='w-full p-2' />
					<button onClick={saveApiKey}>+</button>
				</div>
				<div>
					{apiKey &&
						<div className="flex justify-center">
							<span className="bg-inherit text-red-600 hover:cursor-pointer uppercase" onClick={() => dispatch(appSlice.actions.removeApiKey())}>remove api key</span>
						</div>
					}
				</div>
			</div>

			<div className="bg-black">
				<p>Status: <span className={`${statusColors[status]} uppercase`}>{status}</span></p>
				{error && <p>Error: {error}</p>}
			</div>
		</div>
	)
}

export default Sidebar