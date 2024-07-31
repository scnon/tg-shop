import axios from 'axios'

const request = axios.create({
	baseURL: 'https://test-server.huione.life/app-api',
	timeout: 5000,
})

request.interceptors.request.use(
	config => {
		config.headers['tenant-id'] = '1'
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
