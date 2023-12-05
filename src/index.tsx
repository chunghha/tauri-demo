/* @refresh reload */
import '@fontsource/fira-mono/index.css';
import '@fontsource/nunito-sans/index.css';
import '@fontsource/tienne/index.css';
import { render } from 'solid-js/web';
import { Router } from '@solidjs/router';

import './index.css';
import App from './App';

render(
	() => (
		<Router>
			<App />
		</Router>
	),
	document.getElementById('root') as HTMLElement
);
