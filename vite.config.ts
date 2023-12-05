import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
	plugins: [solidPlugin()],
	server: {
		port: 3000
	},
	build: {
		target: 'esnext'
	},
	define: {
		// eslint-disable-next-line node/prefer-global/process
		APP_VERSION: JSON.stringify(process.env.npm_package_version)
	}
});
