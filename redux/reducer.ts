
import { combineReducers } from '@reduxjs/toolkit'
import tasks from './slices/tasks'
import filters from './slices/filters'
// Import Reducers Here (do not delete this line)

export default combineReducers({
	tasks,
	filters
  // Add Reducers Here (do not delete this line)
})
