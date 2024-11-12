import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IMessage } from '../../models/IMessage'
import fetcher from '../../utils/functions'

interface IAppSlice {
	messages: IMessage[]
	status: 'error' | 'loading' | 'ok'
	error?: string
	apiKey: string
}

const initialState: IAppSlice = {
	messages: [],
	status: 'ok',
	error: '',
	apiKey: '',
}

export const fetchMessages = createAsyncThunk(
	'app/fetchMessages',
	async (_, { getState }) => {
		const { apiKey, messages } = getState() as IAppSlice
		const response = await fetcher(messages, apiKey)
		return response
	},
)

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		addMessage: (state, action: PayloadAction<IMessage>) => {
			state.messages.push(action.payload)
		},
		addApiKey(state, action) {
			state.apiKey = action.payload
		},
		removeApiKey(state) {
			state.apiKey = ''
		},
		setError(state, action) {
			state.error = action.payload
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchMessages.pending, state => {
				state.status = 'loading'
			})
			.addCase(
				fetchMessages.fulfilled,
				(state, action: PayloadAction<IMessage[]>) => {
					state.status = 'ok'
					state.messages = action.payload
				},
			)
			.addCase(fetchMessages.rejected, (state, action) => {
				state.status = 'error'
				state.error = action.error.message
			})
	},
})

export default appSlice.reducer
