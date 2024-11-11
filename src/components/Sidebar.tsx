import React from 'react'

type Props = {}

const Sidebar = (props: Props) => {
	return (
		<div className='w-1/6 pt-4 pl-2'>
			<div className='flex justify-center'>
				<input type='text' placeholder='Enter API key...' className='w-full p-2' />
				<button>+</button>
			</div>
		</div>
	)
}

export default Sidebar