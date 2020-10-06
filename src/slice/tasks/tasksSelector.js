import { createSelector } from 'reselect'


const TasksSelector = {
	tasks: (state) => state.tasks.tasks,
	activeTask: (state) => state.tasks.activeTask,
}


export const getActiveTask = createSelector(
	TasksSelector.tasks, TasksSelector.activeTask,
	(items, activeTask) => {
		let list = [...items]
		return list.filter((item) => item.id === activeTask)
	})
