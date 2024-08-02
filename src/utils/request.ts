import { useUserStore } from '@/stores/UserStore'
import axios from 'axios'

const request = axios.create({
	baseURL: 'https://test-server.huione.life/app-api',
	timeout: 5000,
})

request.interceptors.request.use(
	config => {
		config.headers['tenant-id'] = '1'
		const token = useUserStore.getState().accessToken
		if (token) {
			config.headers['Authorization'] = `Bearer ${token}`
		}
		return config
	},
	error => {
		return Promise.reject(error)
	}
)

request.interceptors.response.use(
	response => {
		const data = response.data
		return data['data']
	},
	error => {
		return Promise.reject(error)
	}
)

export default request
