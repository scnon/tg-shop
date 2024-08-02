import request from '@/utils/request'

export interface IOrderParams {
	deskNumber: string
	orderType: 'desk' | 'takeout'
	addressId: number
	shopId: number
	mobile: string
	gettime: string
	payType: 'xone'
	remark: string
	productId: []
	spec: []
	number: []
	couponId: number
}

export const submitOrder = (data: IOrderParams) => {
	return request.post('/order/create', { params: data })
}

export const getOrderDetail = (id: number) => {
	return request.get(`/order/detail/${id}`)
}

export interface IOrderListReq {
	page: number
	limit: number
	type: number
}

export const getOrderList = (params: IOrderListReq) => {
	return request.get('/order/list', { params })
}
