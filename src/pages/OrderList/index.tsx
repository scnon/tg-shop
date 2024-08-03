import OrderItem from '@/components/OrderItem'
import WebApp from '@twa-dev/sdk'
import { InfiniteScroll, List, Tabs } from 'antd-mobile'
import { CSSProperties, useEffect, useRef, useState } from 'react'
import { FixedSizeList as ListType } from 'react-window'

export default function OrderListPage() {
	const [hasMore] = useState(false)
	const [orderList] = useState<number[]>(Array.from({ length: 100 }, (_, i) => i))
	const listRef = useRef<HTMLDivElement>(null)
	const [height, setHeight] = useState(0)
	const [width, setWidth] = useState(0)

	const onTabChange = (key: string) => {
		console.log(key)
	}

	const loadMore = async () => {}

	const rowRender = ({ index, style }: { index: number; style: CSSProperties }) => {
		return <OrderItem style={style} info={index} />
	}

	useEffect(() => {
		console.log(WebApp.viewportHeight)
		console.log(WebApp.viewportStableHeight)
		if (listRef.current) {
			setHeight(listRef.current.clientHeight)
			setWidth(listRef.current.clientWidth)
		}
	}, [listRef])

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
			<div ref={listRef} className='flex-1 overflow-y-auto hide-scrollbar'>
				<List
					style={
						{
							'--adm-color-background': 'var(--secondary-color)',
							'--adm-color-border': 'none',
						} as React.CSSProperties
					}
				>
					<ListType
						height={height}
						width={width}
						itemSize={230}
						className='hide-scrollbar secondary'
						style={
							{
								'--tw-space-y-reverse': '10px',
							} as React.CSSProperties
						}
						itemCount={orderList.length}
					>
						{rowRender}
					</ListType>
				</List>
				<InfiniteScroll
					className='hint secondary'
					loadMore={loadMore}
					hasMore={hasMore}
				/>
			</div>
		</div>
	)
}
