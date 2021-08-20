import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'
import {Task} from '../../types'

const slice = createSlice({
	name: 'tasks',
	initialState: [] as Task[],
	reducers: {
		createTask: (state, action: PayloadAction<{ name: string }>) => {
			const id = nanoid()
			state = [
				...state,
				{
					id,
					name: action.payload.name,
					done: false,
				}
			]
			return state
		},
		orderTask: (state, action: PayloadAction<{taskId: string, targetIndex: number }>) => {
			const task = state.find(_ => _.id === action.payload.taskId) as Task
			const list = state.filter(_ => _.id !== action.payload.taskId)
			const index = action.payload.targetIndex
			return [
				...list.slice(0,index),
				task,
				...list.slice(index + 1)
			]
		},
		setStatus: (state, action: PayloadAction<{taskId: string, done: boolean}>) => {
			const task = state.find(_ => _.id === action.payload.taskId) as Task
			task.done = action.payload.done
		},
	}
})

export const {
	createTask,
	orderTask,
	setStatus
} = slice.actions

export default slice.reducer
