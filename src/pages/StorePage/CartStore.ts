import { create } from 'zustand'

interface IPopupStore {
	visiable: boolean
	content: React.ReactNode
	open: (content: React.ReactNode) => void
	close: () => void
}

export const usePopupStore = create<IPopupStore>(set => ({
	visiable: false,
	content: null,
	open: (content: React.ReactNode) => {
		set({ visiable: true, content })
	},
	close: () => {
		set({ visiable: false })
	},
}))

interface ICartStore {
	cart: ICartItem[]
	visible: boolean
	price: number
	update: (item: ICartItem) => void
}

interface ICartItem {
	id: number
	count: number
	price: number
	cate: string
	image: string
	name: string
	attrValue: string
}

export const useCartStore = create<ICartStore>(set => ({
	cart: [],
	visible: false,
	price: 0,

	init: () => {},

	update: item => {
		set(({ cart }) => {
			const index = cart.findIndex(i => i.id === item.id)
			const count = item.count
			if (count === 0) {
				const newCart = cart.filter(i => i.id !== item.id)
				return {
					cart: newCart,
					visible: newCart.length > 0,
					price: newCart.reduce((acc, cur) => acc + cur.price * cur.count, 0),
				}
			}

			if (index === -1) {
				return {
					cart: [...cart, item],
					visible: true,
					price:
						cart.reduce((acc, cur) => acc + cur.price * cur.count, 0) +
						item.price * item.count,
				}
			}
			const newCart = [...cart]
			newCart[index] = item
			console.log(newCart.length)
			return {
				cart: newCart,
				visible: newCart.length > 0,
				price: newCart.reduce((acc, cur) => acc + cur.price * cur.count, 0),
			}
		})
	},
}))
