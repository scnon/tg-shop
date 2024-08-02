import OrderItem from '@/components/OrderItem'
import { InfiniteScroll, List, Tabs } from 'antd-mobile'
import { useState } from 'react'

export default function OrderListPage() {
	const [hasMore] = useState(false)
	const [orderList] = useState<number[]>(Array.from({ length: 10 }, (_, i) => i))

	const onTabChange = (key: string) => {
		console.log(key)
	}

	const loadMore = async () => {}

	return (
		<div className='flex-1 overflow-hidden flex flex-col'>
			<Tabs
				defaultActiveKey={'-1'}
				onChange={onTabChange}
				style={
					{
						'--adm-color-border': 'none',
						backgroundColor: 'var(--bg-color)',
					} as React.CSSProperties
				}
			>
				<Tabs.Tab title='全部' key='-1'></Tabs.Tab>
				<Tabs.Tab title='待付款' key='0'></Tabs.Tab>
				<Tabs.Tab title='待发货' key='1'></Tabs.Tab>
				<Tabs.Tab title='待收货' key='2'></Tabs.Tab>
				<Tabs.Tab title='已完成' key='3'></Tabs.Tab>
			</Tabs>
			<div className='flex-1 overflow-y-auto hide-scrollbar'>
				<List
					className=''
					style={
						{
							'--adm-color-background': 'var(--secondary-color)',
							'--adm-color-border': 'none',
						} as React.CSSProperties
					}
				>
					{orderList.map(order => {
						return <OrderItem key={order} />
					})}
				</List>
				<InfiniteScroll className='hint' loadMore={loadMore} hasMore={hasMore} />
			</div>
		</div>
	)
}
