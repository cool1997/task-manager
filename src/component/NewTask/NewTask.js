import React, { memo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { compose } from 'redux'
import { Field, reduxForm, reset } from 'redux-form'

import { Component } from '../../common/FormsControls/FormsControls'
import { createTask } from '../../slice/tasks/tasksSlice'

import styles from './NewTask.module.scss'


const NewTask = ({ handleSubmit, setShowAddNewTask, ...props }) => {
	const dispatch = useDispatch()

	const [error, setError] = useState(``)


	const Handle = {
		onSubmit: (formData) => {
			formData.task
				? dispatch(createTask(formData.task)) && setShowAddNewTask(false)
				: setError(`Заголовок не может быть пустым`)

		},
		closeForm: () => {
			dispatch(reset)
			setShowAddNewTask(false)
		}
	}


	return (
		<div className={`${styles.container}`}>
			<div className={`${styles.overlay}`}></div>
			<form
				className={`${styles.NewTask}`}
				onSubmit={handleSubmit(Handle.onSubmit)}>
				<button
					className={`${styles.btn} ${styles.btnClose}`}
					type={`button`}
					onClick={Handle.closeForm}>
					<span className={`visually-hidden`}>закрыть</span>
					<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0.513356 14C0.420022 14 0.233333 14 0.14 13.9063C-0.0466666 13.7191 -0.0466666 13.4381 0.14 13.2508L13.2067 0.140468C13.3933 -0.0468228 13.6733 -0.0468228 13.86 0.140468C14.0467 0.32776 14.0467 0.608679 13.86 0.79597L0.793344 13.9063C0.793344 14 0.606689 14 0.513356 14Z" fill="#FF0000" />
						<path d="M13.58 14C13.4867 14 13.3 14 13.2067 13.9063L0.14 0.79597C-0.0466666 0.608679 -0.0466666 0.32776 0.14 0.140468C0.326666 -0.0468228 0.606678 -0.0468228 0.793344 0.140468L13.86 13.2508C14.0467 13.4381 14.0467 13.7191 13.86 13.9063C13.86 14 13.6733 14 13.58 14Z" fill="#FF0000" />
					</svg>

				</button>
				<label
					className={`${styles.label}`}
					htmlFor={`newTask`}>Краткое описание</label>
				<Field
					className={`${styles.field}`}
					id={`newTask`}
					component={Component.input}
					type={`text`}
					name={`task`}
					autoComplete={`off`} />
				{
					error &&
					<span className={`${styles.error}`}>{error}</span>
				}
				<button
					className={`${styles.btn} ${styles.btnAdd}`}>
					создать
				</button>
			</form>
		</div>
	)
}


const Container = compose(
	reduxForm({ form: `FormNewTask`, enableReinitialize: true }),
	memo
)(NewTask)


export { Container as NewTask }