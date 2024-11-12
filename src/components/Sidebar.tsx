import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../utils/hooks"
import { appSlice } from "../store/reducers/AppSlice"

const Sidebar = () => {
	const [value, setValue] = useState('')
	const dispatch = useAppDispatch()
	const { addApiKey } = appSlice.actions;
	const { apiKey, status } = useAppSelector(state => state)

	const saveApiKey = () => {
		dispatch(addApiKey(value))
		setValue('')
	}

	const statusColors = {
		'error': 'text-error',
		'loading': 'text-loading',
		'ok': 'text-ok'
	}

	return (
		<div className='w-1/6 max-sm:w-full p-4 flex flex-col justify-between border-2 border-l-0 max-sm:border-2'>
			<div>
				<div className='flex flex-col mb-2'>
					<input type='text' value={value} onChange={(e) => setValue(e.target.value)} placeholder='Enter API key...' className='w-full p-2 border-2' />
					<button onClick={saveApiKey}>+</button>
				</div>
				<div>
					{apiKey &&
						<div className="flex justify-center">
							<span className="bg-inherit text-error hover:cursor-pointer uppercase" onClick={() => dispatch(appSlice.actions.removeApiKey())}>remove api key</span>
						</div>
					}
				</div>
			</div>

			<div className="max-sm:hidden">
				<p>Status: <span className={`${statusColors[status]} uppercase`}>{status}</span></p>
			</div>
		</div>
	)
}

export default Sidebar