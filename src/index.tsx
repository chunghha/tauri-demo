/* @refresh reload */
import '@fontsource/fira-mono/index.css'
import '@fontsource/nunito-sans/index.css'
import '@fontsource/tienne/index.css'
import { Route, Router } from '@solidjs/router'
import { render } from 'solid-js/web'

import Nav from './components/Nav'
import './index.css'
import About from './pages/About'
import Countries from './pages/Countries'
import Fib from './pages/Fib'
import Home from './pages/Home'
import { isDark } from './stores/theme.store'

render(
  () => (
    <div data-theme={isDark() ? 'rosepine' : 'dawn'}>
      <div class="bg-gradient-to-r from-base-100 to-neutral">
        <div class="max-w-8xl mx-auto pt-4 pr-8 pb-8 pl-8">
          <Nav />
          <Router>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/country" component={Countries} />
            <Route path="/fib" component={Fib} />
          </Router>
        </div>
      </div>
    </div>
  ),
  document.getElementById('root') as HTMLElement,
)
