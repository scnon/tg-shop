import { getOrderList } from '@/apis/order'
import LoadWidget from '@/components/LoadWidget'
import OrderItem, { OrderItemLoading } from '@/components/OrderItem'
import { useInfiniteScroll } from 'ahooks'
import { Data } from 'ahooks/lib/useInfiniteScroll/types'
// import { useThrottleFn } from 'ahooks'
import { ErrorBlock, InfiniteScroll, List, Tabs } from 'antd-mobile'
import { useRef, useState } from 'react'
// import { FixedSizeList } from 'react-window'

// const sleep = (time: number) => new Promise(resolve => setTimeout(resolve, time))

export default function OrderListPage() {
	let type = 0
	const [hasMore, setHasMore] = useState(true)
	const { data, loading, error, loadMore, reload } = useInfiniteScroll(d => {
		const page = d === undefined ? 1 : Math.floor(d.list.length / 10 + 1)
		return new Promise<Data>(async resolve => {
			getOrderList({ page: page, limit: 10, type: type }).then(res => {
				setHasMore(res.length === 10)
				resolve({ list: res })
			})
		})
	})

	const listRef = useRef<HTMLDivElement>(null)
	// const [height, setHeight] = useState(0)
	// const [width, setWidth] = useState(0)

	const onTabChange = (key: string) => {
		console.log(key)
		type = parseInt(key)
		reload()
	}

	// const doLoadMore = async () => {
	// pagination.onChange(pagination.current + 1, 10)
	// const list = await getOrderList({ page: 1, limit: 10, type: 0 })
	// console.log(list)
	// setHasMore(true)
	// setOrderList([...orderList, ...Array.from({ length: 10 }, (_, i) => i)])
	// }

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
				<Tabs.Tab title='进行中' key='1'></Tabs.Tab>
				<Tabs.Tab title='已完成' key='4'></Tabs.Tab>
				<Tabs.Tab title='已退款' key='-3'></Tabs.Tab>
			</Tabs>
			<div
				ref={listRef}
				className='flex-1 overflow-y-auto hide-scrollbar secondary'
			>
				{/* <FixedSizeList
					height={height}
					width={width}
					itemSize={230}
					className='hide-scrollbar secondary'
					itemCount={orderList.length}
				>
					{rowRender}
				</FixedSizeList> */}
				<LoadWidget
					loading={loading}
					error={error}
					list
					loadingNode={<OrderItemLoading />}
				>
					<div className=''>
						<List
							style={
								{
									'--adm-color-background': 'var(--secondary-color)',
									'--adm-color-border': 'none',
								} as React.CSSProperties
							}
						>
							{(data?.list.length ?? 0) > 0 &&
								data?.list.map((item, index) => {
									return <OrderItem key={index} info={item} />
								})}
							{(data?.list.length ?? 0) === 0 && (
								<ErrorBlock
									className='flex-grow flex flex-col justify-center items-center hint pt-20'
									status='empty'
									title='暂无订单'
									description=''
								/>
							)}
						</List>
						{hasMore && (
							<InfiniteScroll
								className='hint'
								hasMore={hasMore}
								threshold={400}
								loadMore={async () => loadMore()}
							/>
						)}
					</div>
				</LoadWidget>
			</div>
		</div>
	)
}
