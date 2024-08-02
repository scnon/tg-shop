import type { ComponentType, JSX } from 'react'

import { IndexPage } from '@/pages/IndexPage/IndexPage'
import StorePage from '@/pages/StorePage/StorePage'
import PayPage from '@/pages/PayPage/PayPage'
import AddressPage from '@/pages/AddressPage/AddressPage'
import AddressAddPage from '@/pages/AddressPage/AddressAddPage'
import OrderDetailsPage from '@/pages/OrderDetails'

interface Route {
	path: string
	Component: ComponentType
	title?: string
	icon?: JSX.Element
	children?: React.ReactNode
}

export const routes: Route[] = [
	{ path: '/', Component: IndexPage },
	{ path: '/store', Component: StorePage, title: 'Store Page' },
	{ path: '/pay', Component: PayPage, title: 'Pay Page' },
	{ path: '/address', Component: AddressPage, title: 'Address Page' },
	{ path: '/address/add', Component: AddressAddPage, title: 'Address Add Page' },
	{ path: '/orderDetails', Component: OrderDetailsPage, title: 'Order Details Page' },
]
