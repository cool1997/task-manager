import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { compose } from 'redux'
import { NavLink } from 'react-router-dom'

import { NewTask } from '../NewTask/NewTask'
import { deleteTask, getTasks } from '../../slice/tasks/tasksSlice'

import styles from './Items.module.scss'


const Items = ({ ...props }) => {
	const dispatch = useDispatch()

	const { tasks } = useSelector((state) => state.tasks)

	const [showAddNewTask, setShowAddNewTask] = useState(false)


	useEffect(() => {
		dispatch(getTasks())
	}, [tasks])


	const Handle = {
		addTask: () => {
			dispatch()
		},
		deleteTask: (id) => {
			dispatch(deleteTask(id))
		}
	}


	return (
		<section className={`${styles.Items}`}>
			<h2 className={`${styles.title}`}>Список задач</h2>
			<button 
				className={`${styles.btn} ${styles.btnAdd}`}
				onClick={() => setShowAddNewTask(true)}>
				Добавить
			</button>
			<ul className={`${styles.list}`}>
				{
					tasks.map((item) => <li
						className={`${styles.item}`}
						key={item.id}>
							<span className={`${styles.id}`}>{item.id}</span>
							<span className={`${styles.body}`}>{item.title}</span>		
							<div className={`${styles.controlContainer}`}>
								<NavLink
									className={`${styles.btn} ${styles.changeBtn}`}
									to={`/${item.id}`}>
									<span className={`visually-hidden`}>редактировать задачу</span>
									<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M0.51862 22C0.422832 22 0.231233 21.9046 0.135446 21.9046C0.039658 21.8091 -0.0561063 21.6182 0.0396814 21.5228L1.09332 14.7462C1.09332 14.6508 1.18909 14.5553 1.18909 14.4599L15.2699 0.429501C15.8447 -0.143167 16.7067 -0.143167 17.2815 0.429501L21.5919 4.72451C21.8793 5.01085 22.0709 5.39262 21.9751 5.86985C21.9751 6.25163 21.7835 6.53795 21.4961 6.72884C18.3352 9.87852 16.7067 11.5011 15.0783 13.1237L14.5994 13.6009C12.8752 15.3189 11.1511 17.0369 7.51117 20.6638C7.41538 20.7592 7.31955 20.7592 7.22376 20.7592L0.51862 22ZM2.0512 14.9371L1.09332 20.8547L7.03223 19.9002C10.5764 16.3688 12.3005 14.6508 14.0247 12.9328L14.5994 12.3601C16.132 10.833 17.8562 9.11497 21.0172 5.9653C21.113 5.86985 21.1129 5.7744 21.2087 5.7744C21.2087 5.67895 21.2088 5.48807 21.0172 5.39262L16.7068 1.09761C16.5152 0.906722 16.2278 0.906722 16.1321 1.09761L2.0512 14.9371Z" fill="#666666"/>
									<path d="M18.1435 9.49675C18.0477 9.49675 17.8561 9.49675 17.8561 9.4013L12.492 4.15184C12.3004 3.96095 12.3004 3.67462 12.492 3.48373C12.6836 3.29284 12.9709 3.29284 13.1625 3.48373L18.5267 8.73319C18.7183 8.92408 18.7183 9.21041 18.5267 9.4013C18.3351 9.49675 18.2393 9.49675 18.1435 9.49675Z" fill="#666666"/>
									<path d="M7.5111 19.9957C7.41531 19.9957 7.22372 19.9957 7.12793 19.9002L2.24278 15.0325C2.0512 14.8417 2.0512 14.5553 2.24278 14.3644C2.43435 14.1735 2.72167 14.1735 2.91325 14.3644L7.79839 19.2321C7.98997 19.423 7.98997 19.7093 7.79839 19.9002C7.79839 19.9002 7.60689 19.9957 7.5111 19.9957Z" fill="#666666"/>
									</svg>
								</NavLink>
								<button 
									className={`${styles.btn} ${styles.deleteBtn}`}
									onClick={() => Handle.deleteTask(item.id)}>
									<span className={`visually-hidden`}>удалить задачу</span>
									<svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clip-path="url(#clip0)">
									<path d="M7.07069 7.26001C6.93675 7.26001 6.80828 7.31269 6.71357 7.40646C6.61885 7.50022 6.56564 7.6274 6.56564 7.76001V18.12C6.56564 18.2526 6.61885 18.3798 6.71357 18.4736C6.80828 18.5673 6.93675 18.62 7.07069 18.62C7.20464 18.62 7.3331 18.5673 7.42782 18.4736C7.52253 18.3798 7.57574 18.2526 7.57574 18.12V7.76001C7.57574 7.6274 7.52253 7.50022 7.42782 7.40646C7.3331 7.31269 7.20464 7.26001 7.07069 7.26001Z" fill="#F4583F"/>
									<path d="M10.9596 7.26001C10.8257 7.26001 10.6972 7.31269 10.6025 7.40646C10.5078 7.50022 10.4546 7.6274 10.4546 7.76001V18.12C10.4546 18.2526 10.5078 18.3798 10.6025 18.4736C10.6972 18.5673 10.8257 18.62 10.9596 18.62C11.0936 18.62 11.222 18.5673 11.3167 18.4736C11.4114 18.3798 11.4647 18.2526 11.4647 18.12V7.76001C11.4647 7.6274 11.4114 7.50022 11.3167 7.40646C11.222 7.31269 11.0936 7.26001 10.9596 7.26001Z" fill="#F4583F"/>
									<path d="M17.4949 3.99999H12.9192V2.58999C12.9192 1.90481 12.645 1.24754 12.1565 0.762111C11.6681 0.276678 11.0052 0.00263615 10.3131 -9.34063e-06H7.69697C7.35087 -0.00397841 7.00741 0.0600835 6.6865 0.188465C6.36559 0.316847 6.0736 0.506995 5.82744 0.747895C5.58129 0.988795 5.38587 1.27566 5.25251 1.59186C5.11914 1.90807 5.05048 2.24733 5.0505 2.58999V3.99999H0.50505C0.371103 3.99999 0.242641 4.05267 0.147926 4.14644C0.0532105 4.24021 0 4.36738 0 4.49999C0 4.6326 0.0532105 4.75978 0.147926 4.85354C0.242641 4.94731 0.371103 4.99999 0.50505 4.99999H2.52525C2.52207 5.04994 2.52207 5.10004 2.52525 5.14999V20.71C2.525 21.0436 2.65533 21.3644 2.88888 21.6049C3.12242 21.8455 3.44102 21.9871 3.77778 22H14.2323C14.5779 22 14.9093 21.8641 15.1537 21.6222C15.3981 21.3802 15.5354 21.0521 15.5354 20.71V5.17999C15.5385 5.13004 15.5385 5.07994 15.5354 5.02999H17.5556C17.6895 5.02999 17.818 4.97731 17.9127 4.88354C18.0074 4.78978 18.0606 4.6626 18.0606 4.52999C18.0606 4.39738 18.0074 4.27021 17.9127 4.17644C17.818 4.08267 17.6895 4.02999 17.5556 4.02999L17.4949 3.99999ZM6.06061 2.87999V2.58999C6.06057 2.37864 6.10309 2.1694 6.18569 1.97451C6.26829 1.77962 6.38931 1.60299 6.54167 1.45495C6.69403 1.30691 6.87468 1.19042 7.07305 1.1123C7.27141 1.03418 7.48352 0.996003 7.69697 0.999991H10.3131C10.7391 0.999991 11.1476 1.16751 11.4488 1.46569C11.75 1.76387 11.9192 2.1683 11.9192 2.58999V3.87999H6.06061V2.87999ZM14.4949 5.16999V20.71C14.4949 20.7869 14.4641 20.8607 14.4092 20.9151C14.3542 20.9694 14.2797 21 14.202 21H3.77778C3.70009 21 3.62558 20.9694 3.57065 20.9151C3.51571 20.8607 3.48485 20.7869 3.48485 20.71V5.17999C3.48037 5.11604 3.4982 5.0525 3.53535 4.99999H14.4646C14.5054 5.05118 14.5268 5.11484 14.5253 5.17999L14.4949 5.16999Z" fill="#F4583F"/>
									</g>
									<defs>
									<clipPath id="clip0">
									<rect width="18" height="22" fill="white"/>
									</clipPath>
									</defs>
									</svg>
								</button>
							</div>					
						</li>
					)
				}
				{
					tasks.length === 0 && 
					<span>н/д</span> 
				}
			</ul>

			{showAddNewTask && <NewTask setShowAddNewTask={setShowAddNewTask} />}
		</section>	
	)
}


const Container = compose(
	memo
)(Items)

export { Container as Items } 