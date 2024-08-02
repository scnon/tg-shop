import request from '@/utils/request'

export interface IAddress {
	id?: number
	address: string
	detail: string
	isDefault: 0 | 1
	latitude: string
	longitude: string
	phone: string
	realName: string
}

export const getAddressList = (): Promise<IAddress[]> => {
	return request.get('/address/list')
}

export const addEditAddress = (data: IAddress): Promise<number> => {
	return request.post('/address/add', data)
}
