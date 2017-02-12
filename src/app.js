import React from 'react'
import ReactDOM from 'react-dom'

import { IntlProvider, addLocaleData } from 'react-intl'
import { createStore} from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { createHashHistory } from 'history'

import appReducer from './redux'
import { insideCordova } from './utils/cordova'

import config from './config'
import messages from './messages/fr'
import localeData from './messages'

import App from './components/App'
import Home from './components/pages/Home'
import Summary from './components/pages/Summary'
import Backup from './components/pages/Backup'
import Sync from './components/pages/Sync'


const init = () => {
  addLocaleData(localeData)

  // inialise stuff here

  let store = createStore(appReducer)
  let history = browserHistory;

  ReactDOM.render((
      <Provider store={store}>
        <IntlProvider locale={config.locale} messages={messages}>
          <Router history={history} >
            <Route path='/' component={App}>
              <IndexRoute component={Home}/>
              <Route path='summary' component={Summary}/>
              <Route path='backup' component={Backup}/>
              <Route path='sync' component={Sync}/>
            </Route>
          </Router>
        </IntlProvider>
      </Provider>
    ),
    document.getElementById('main')
  )
}

if (insideCordova()) {
  document.addEventListener('deviceready', init, false)
} else {
  init()
}
