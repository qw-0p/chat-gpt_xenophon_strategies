import { configureStore } from '@reduxjs/toolkit'
import appReducer from './reducers/AppSlice'

export const setupStore = () => {
	return configureStore({
		devTools: true,
		reducer: appReducer,
	})
}

export type RootState = ReturnType<typeof appReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
