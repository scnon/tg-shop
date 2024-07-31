import ReactDOM from 'react-dom/client'
import '@twa-dev/sdk'

import { Root } from '@/components/Root'

import '@telegram-apps/telegram-ui/dist/styles.css'
import './index.css'

document.documentElement.addEventListener(
	'touchstart',
	function (event) {
		if (event.touches.length > 1) {
			event.preventDefault()
		}
	},
	false
)

let lastTouchEnd = 0
document.documentElement.addEventListener(
	'touchend',
	function (event) {
		const now = Date.now()
		if (now - lastTouchEnd <= 300) {
			event.preventDefault()
		}
		lastTouchEnd = now
	},
	false
)

ReactDOM.createRoot(document.getElementById('root')!).render(<Root />)
