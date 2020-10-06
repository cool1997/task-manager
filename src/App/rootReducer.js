import { combineReducers } from '@reduxjs/toolkit'
import { reducer as formReducer } from 'redux-form'

import appReducer from '../slice/app/appSlice'
import tasksReducer from '../slice/tasks/tasksSlice'

export const rootReducer = combineReducers({
    app: appReducer,
    tasks: tasksReducer,
    form: formReducer,
})