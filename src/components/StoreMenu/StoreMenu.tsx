import { getStoreMenu } from '@/apis/store'
import { useRequest, useThrottleFn } from 'ahooks'
import { SideBar } from 'antd-mobile'
import { useEffect, useRef, useState } from 'react'
import ProductItem from '../ProductItem/ProductItem'
import LoadWidget from '../LoadWidget'

export default function ShopMenu({ id, canScroll }: { id: string; canScroll: boolean }) {
	const { data, error, loading } = useRequest(() => getStoreMenu(id))
	const [tabIdx, setTabIdx] = useState('0')

	const { run: handleScroll } = useThrottleFn(
		() => {
			let currentKey = 0
			if (data == null) return
			for (let idx = 0; idx < data.length; idx++) {
				const element = document.getElementById(`anchor-${idx}`)
				if (!element) continue
				const rect = element.getBoundingClientRect()
				if (rect.top <= 164) {
					currentKey = idx
				} else {
					break
				}
			}
			setTabIdx(currentKey.toString())
		},
		{
			leading: true,
			trailing: true,
			wait: 100,
		}
	)

	const mainElementRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const mainElement = mainElementRef.current
		if (!mainElement) return
		mainElement.addEventListener('scroll', handleScroll)
		return () => {
			mainElement.removeEventListener('scroll', handleScroll)
		}
	}, [handleScroll])

	const onTabChange = (key: string) => {
		document.getElementById(`anchor-${key}`)?.scrollIntoView()
	}

	return (
		<div className='flex overflow-hidden h-screen'>
			<div
				className='primary'
				style={
					{
						width: '105px',
						'--width': '64px',
						'--adm-color-background': 'var(--secondary-color)',
					} as React.CSSProperties
				}
			>
				<LoadWidget error={error} loading={loading} list height='h-10'>
					<SideBar
						activeKey={tabIdx}
						onChange={onTabChange}
						style={{
							'--background-color': 'var(--bg-color)',
						}}
					>
						{data?.map((item, idx) => (
							<SideBar.Item
								className='font-bold'
								key={idx}
								title={item.name}
							></SideBar.Item>
						))}
					</SideBar>
				</LoadWidget>
			</div>
			<div
				className={`flex-1 hide-scrollbar ${
					canScroll && !loading ? 'overflow-y-auto' : ''
				}`}
				style={{
					backgroundColor: 'var(--secondary-color)',
				}}
				ref={mainElementRef}
			>
				<LoadWidget error={error} loading={loading} list>
					{data?.map((item, idx) => (
						<div key={item.id}>
							<div id={`anchor-${idx}`} className='m-2 text-sm font-bold'>
								{item.name}
							</div>
							<div className='space-y-2'>
								{item.goodsList.map(item => (
									<ProductItem key={item.id} info={item} />
								))}
							</div>
						</div>
					))}
				</LoadWidget>
				<div className='h-6'></div>
			</div>
		</div>
	)
}
