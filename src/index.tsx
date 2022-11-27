/* @refresh reload */
import '@fontsource/fira-mono/index.css'
import '@fontsource/inter/index.css'
import '@fontsource/poppins/index.css'
import { render } from 'solid-js/web'
import { Router } from '@solidjs/router'

import './index.css'
import App from './App'

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById('root') as HTMLElement,
)
