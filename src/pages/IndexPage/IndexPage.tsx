import { TabBar } from 'antd-mobile'
import { ShopbagOutline, UnorderedListOutline } from 'antd-mobile-icons'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import HomePage from '../HomePage'
import OrderListPage from '../OrderList'

const tabs = [
	{
		key: '/',
		title: '首页',
		icon: <ShopbagOutline />,
		// badge: Badge.dot,
	},
	{
		key: '/orderList',
		title: '订单',
		icon: <UnorderedListOutline />,
		// badge: Badge.dot,
	},
]

export const IndexPage = () => {
	const navigate = useNavigate()
	const tabIdx = tabs.findIndex(tab => tab.key === window.location.pathname)
	const onTabChange = (key: string) => {
		navigate(key)
	}
	console.log(tabIdx)

	return (
		<div className='primary h-screen flex flex-col'>
			<div className='flex-grow flex overflow-hidden'>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/orderList' element={<OrderListPage />} />
					<Route path='*' element={<Navigate to='/' />} />
				</Routes>
			</div>
			<TabBar
				onChange={onTabChange}
				tabIndex={tabIdx}
				defaultActiveKey={tabs[tabIdx].key}
				style={{
					backgroundColor: 'var(--bg-color)',
					borderTop: '1px solid var(--tg-theme-section-separator-color)',
				}}
			>
				{tabs.map(tab => (
					<TabBar.Item key={tab.key} icon={tab.icon} />
				))}
			</TabBar>
		</div>
	)
}
