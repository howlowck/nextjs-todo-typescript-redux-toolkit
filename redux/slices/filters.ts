import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Payload = {
	filterType: 'Uncompleted' | 'Done'
	targetState: 'show' | 'hide'
}

const slice = createSlice({
	name: 'filters',
	initialState: {
		'showUncompleted': true,
		'showDone': true,
	},
	reducers: {
		setFilter: (state, action: PayloadAction<Payload>) => {
			const type = action.payload.filterType
			const target = action.payload.targetState
			if (type === 'Done') {
				state.showDone = (target === 'show')
				return
			}
			if (type === 'Uncompleted') {
				state.showUncompleted = (target === 'show')
				return
			}
		}
		
	}
})

export const {
	setFilter
} = slice.actions

export default slice.reducer
