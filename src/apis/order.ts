import request from '@/utils/request'
import { IStoreInfo } from './store'

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

export interface IOrderListItem {
	id: number
	shop: IStoreInfo
	status: number
	createTime: number
	getTime: number
	payPrice: number
	cartInfo: {
		id: number
		image: string
		title: string
		spec: string
	}[]
}

export const getOrderList = (params: IOrderListReq): Promise<IOrderListItem[]> => {
	return request.get('/order/list', { params })
}
