import React from 'react'
import { render } from 'react-dom'
import Root from './components/Root'
import registerServiceWorker from './registerServiceWorker'
import './styles/index.css';
import store from './store';

render(
  <Root store={store} />,
  document.getElementById('root')
)


registerServiceWorker();
