import { createSlice } from '@reduxjs/toolkit'

import { tasksApi } from '../../api/tasksApi'


const initialState = {
    tasks: [],
    activeTaskId: null
}

const tasksSlice = createSlice({
    name: `tasks`,
    initialState,
    reducers: {
        setActiveTaskId(state, action) {
            const id = action.payload
            state.activeTaskId = id
        },
        setItems(state, action) {
            state.tasks = action.payload
            
        },
        addItem(state, action) {
            const {id, title} = action.payload
            state.tasks = [ ...state.tasks, {id, title}]
        },
        changeItem(state, action) {
            const {id, title} = action.payload
            state.tasks = state.tasks
                .map((item) => item.id === id
                    ? {
                        id,
                        title
                    }
                    : item
                )
        },
        deleteItem(state, action) {
            const { id } = action.payload
            state.tasks = state.tasks
                .filter(item => item.id !== id)
        },
    }
})


export const {
    setActiveTaskId, 
    setItems,
    addItem,
    changeItem,
    deleteItem,
} = tasksSlice.actions

export const getTasks = () => async (dispatch) => {
    const response = await tasksApi.getTasks()
    dispatch(setItems(response.data.data))
    
}

export const createTask = (title) => async (dispatch) => {
    const response = await tasksApi.createTask(title)
    dispatch(addItem({id: response.data.id, title}))
}

export const changeTask = (id, title) => async (dispatch) => {
    await tasksApi.changeTask(id, title)
    dispatch(changeItem({id, title}))
}

export const deleteTask = (id) => async (dispatch) => {
    await tasksApi.deleteTask(id)
    dispatch(deleteItem({id}))
}


export default tasksSlice.reducer