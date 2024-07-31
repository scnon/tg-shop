import type { ComponentType, JSX } from 'react'

import { IndexPage } from '@/pages/IndexPage/IndexPage'
import { InitDataPage } from '@/pages/InitDataPage/InitDataPage'
import { LaunchParamsPage } from '@/pages/LaunchParamsPage/LaunchParamsPage.tsx'
import { ThemeParamsPage } from '@/pages/ThemeParamsPage/ThemeParamsPage.tsx'
import StorePage from '@/pages/StorePage/StorePage'
import PayPage from '@/pages/PayPage/PayPage'
import AddressPage from '@/pages/AddressPage/AddressPage'

interface Route {
	path: string
	Component: ComponentType
	title?: string
	icon?: JSX.Element
}

export const routes: Route[] = [
	{ path: '/', Component: IndexPage },
	{ path: '/init-data', Component: InitDataPage, title: 'Init Data' },
	{ path: '/theme-params', Component: ThemeParamsPage, title: 'Theme Params' },
	{ path: '/launch-params', Component: LaunchParamsPage, title: 'Launch Params' },
	{ path: '/store', Component: StorePage, title: 'Store Page' },
	{ path: '/pay', Component: PayPage, title: 'Pay Page' },
	{ path: '/address', Component: AddressPage, title: 'Address Page' },
]
