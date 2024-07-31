import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react-swc'
// import basicSsl from '@vitejs/plugin-basic-ssl';
import tailwindcss from 'tailwindcss'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
	base: '/',
	plugins: [
		// Allows using React dev server along with building a React application with Vite.
		// https://npmjs.com/package/@vitejs/plugin-react-swc
		react(),
		// Allows using the compilerOptions.paths property in tsconfig.json.
		// https://www.npmjs.com/package/vite-tsconfig-paths
		tsconfigPaths(),
		// Allows using self-signed certificates to run the dev server using HTTPS.
		// https://www.npmjs.com/package/@vitejs/plugin-basic-ssl
		// basicSsl(),
		mkcert(),
	],
	css: {
		postcss: {
			plugins: [tailwindcss()],
		},
	},
	publicDir: './public',
	server: {
		https: {},
		host: 'xing.me',
	},
})
