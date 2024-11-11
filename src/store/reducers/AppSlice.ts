import { createSlice } from '@reduxjs/toolkit'
import { IMessage } from '../../models/IMessage'

interface IAppSlice {
	messages: IMessage[]
	isLoading: boolean
	error: string
}

const initialState: IAppSlice = {
	messages: [],
	isLoading: false,
	error: '',
}

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		addMessage(state, action) {
			state.messages.push(action.payload)
		},
		setLoading(state, action) {
			state.isLoading = action.payload
		},
		setError(state, action) {
			state.error = action.payload
		},
	},
})

export default appSlice.reducer
