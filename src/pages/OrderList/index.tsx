import OrderItem from '@/components/OrderItem'
// import { useThrottleFn } from 'ahooks'
import { InfiniteScroll, List, Tabs } from 'antd-mobile'
import { useRef, useState } from 'react'
// import { FixedSizeList } from 'react-window'

const sleep = (time: number) => new Promise(resolve => setTimeout(resolve, time))

export default function OrderListPage() {
	const [hasMore, setHasMore] = useState(true)
	const [orderList, setOrderList] = useState<number[]>(
		Array.from({ length: 10 }, (_, i) => i)
	)
	const listRef = useRef<HTMLDivElement>(null)
	// const [height, setHeight] = useState(0)
	// const [width, setWidth] = useState(0)

	const onTabChange = (key: string) => {
		console.log(key)
	}

	const loadMore = async () => {
		await sleep(1000)
		setHasMore(true)
		setOrderList([...orderList, ...Array.from({ length: 10 }, (_, i) => i)])
	}

	// const rowRender = ({ index, style }: { index: number; style: CSSProperties }) => {
	// 	return <OrderItem style={style} info={index} />
	// }

	// const { run: handleScroll } = useThrottleFn(
	// 	() => {
	// 		console.log('scroll')
	// 	},
	// 	{
	// 		leading: true,
	// 		trailing: true,
	// 		wait: 100,
	// 	}
	// )

	// useEffect(() => {
	// 	if (listRef.current) {
	// 		setHeight(listRef.current.clientHeight)
	// 		setWidth(listRef.current.clientWidth)

	// 		listRef.current.addEventListener('scroll', handleScroll)
	// 	}
	// 	return () => {
	// 		if (listRef.current) {
	// 			listRef.current.removeEventListener('scroll', () => {})
	// 		}
	// 	}
	// }, [listRef])

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
				{/* <FixedSizeList
					height={height}
					width={width}
					itemSize={230}
					className='hide-scrollbar secondary'
					itemCount={orderList.length}
				>
					{rowRender}
				</FixedSizeList> */}
				<List
					style={
						{
							'--adm-color-background': 'var(--secondary-color)',
							'--adm-color-border': 'none',
						} as React.CSSProperties
					}
				>
					{orderList.map((item, index) => {
						return <OrderItem key={index} info={item} />
					})}
				</List>
				<InfiniteScroll
					className='hint secondary'
					hasMore={hasMore}
					loadMore={loadMore}
				/>
			</div>
		</div>
	)
}
