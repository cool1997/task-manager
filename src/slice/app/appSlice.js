import { createSlice } from '@reduxjs/toolkit'

import { getTasks } from '../tasks/tasksSlice'


const initialState = {
    initialized: false,
}


const appSlice = createSlice({
    name: `app`,
    initialState,
    reducers: {
        initializedSuccess(state) {
            state.initialized = true
        }
    }
})



export const { 
    initializedSuccess 
} = appSlice.actions

export const initializeApp = () => async (dispatch) => {
    await dispatch(getTasks())
    await dispatch(initializedSuccess())
}


export default appSlice.reducer