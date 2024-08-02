import { create } from 'zustand'

interface ICartStore {
	cart: ICartItem[]
	price: number
	update: (item: ICartItem) => void
}

export interface ICartItem {
	id: number
	count: number
	price: number
	image: string
	name: string
	attrValue: string
}

export const useCartStore = create<ICartStore>(set => ({
	cart: [],
	price: 0,
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
