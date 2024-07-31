import request from '@/utils/request'

export interface IStoreInfo {
	address: string
	addressMap: string
	deliveryPrice: number
	id: number
	image: string
	name: string
	notice: string
	status: number
	startTime: number
	endTime: number
	images: string[]
}

export function getStoreList(params: {
	lng: number
	lat: number
	kw: string
	shop_id: number
}): Promise<IStoreInfo[]> {
	return request.get('/store/list', { params })
}

export function getStoreDetail(id: string): Promise<IStoreInfo> {
	return request.get(`/store/getShop`, { params: { shop_id: id } })
}

export interface IProduct {
	id: number
	storeName: string
	price: number
	image: string
	sliderImage: string
	keyword: string
	productAttr: IProductAttr[]
	productValue: unknown
}

export interface IProductAttr {
	id: number
	productId: number
	attrName: string
	attrValue: {
		attr: string
		check: boolean
	}[]
	attrValueArr: string[]
	attrValues: string
}
export interface IMenuInfo {
	id: number
	name: string
	prcUrl: string
	goodsList: IProduct[]
}
export function getStoreMenu(id: string): Promise<IMenuInfo[]> {
	return request.get(`/product/products`, { params: { shopId: id } })
}

export function getGoodsDetail(id: string) {
	return request.get(`/product/detail/${id}`)
}
