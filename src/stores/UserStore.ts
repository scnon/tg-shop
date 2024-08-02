import { ILoginResp, IUserInfo } from './../apis/auth'
import { create } from 'zustand'

interface IUserStore {
	accessToken: string
	userInfo: IUserInfo | null
	login: (data: ILoginResp) => void
}

export const useUserStore = create<IUserStore>(set => ({
	userInfo: null,
	accessToken: '',
	login: (data: ILoginResp) => {
		set({ accessToken: data.accessToken, userInfo: data.userInfo })
	},
}))
