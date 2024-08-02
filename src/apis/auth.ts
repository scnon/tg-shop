import request from '@/utils/request'

export interface ILoginParams {
	platformId: number
}

export interface ILoginResp {
	accessToken: string
	expiresTime: number
	refreshToken: string
	userId: number
	userInfo: IUserInfo
}

export interface IUserInfo {
	id: number
	address: string
	avatar: string
	mobile: string
}

export const login = (data: ILoginParams): Promise<ILoginResp> => {
	return request.post('/member/auth/authorize-login', data)
}
