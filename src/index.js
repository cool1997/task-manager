import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
//HashRouter для gh-pages
import {BrowserRouter} from 'react-router-dom'

import store from './App/store'

import './index.scss'
// import './assets/css/vars.css'
import './assets/css/reset.css'


const render = () => {
  const App = require('./App/App').default

  ReactDOM.render(
    <BrowserRouter>
    {
      // <HashRouter basename={'https://cool1997.github.io/task-manager/'}>
    }
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  )
}

render()

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./App/App', render)
}