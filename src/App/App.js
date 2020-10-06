import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { compose } from 'redux'

import { initializeApp } from '../slice/app/appSlice'

import { Items } from '../component/Items/Items'
import { Item } from '../component/Item/Item'
import { Preloader } from '../common/Preloader/Preloader'

import styles from './App.module.scss'


const App = ({ ...props }) => {
	const dispatch = useDispatch()

	const { initialized } = useSelector((state) => state.app)


	useEffect(() => {
		dispatch(initializeApp())
	}, [dispatch])


	return (
		!initialized
			? <Preloader />
			: <div className={`${styles.App}`}>
				<main className={`${styles.main}`}>
					<Switch>
						<Route path={`/`} exact render={() => <Items />} />
						<Route path={`/:taskId?`} render={() => <Item />} />
					</Switch>
				</main>
			</div>
	)
}


export default compose(
	memo
)(App)