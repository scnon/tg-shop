import { getStoreMenu } from '@/apis/store'
import { useRequest, useThrottleFn } from 'ahooks'
import { SideBar } from 'antd-mobile'
import { useEffect, useRef, useState } from 'react'
import ProductItem from '../ProductItem/ProductItem'
import LoadWidget from '../LoadWidget'
import './StoreMenu.css'

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
				console.log(idx, rect)
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
			<div className='sider-bar'>
				<LoadWidget error={error} loading={loading}>
					<SideBar
						activeKey={tabIdx}
						onChange={onTabChange}
						style={{
							'--background-color': 'var(--tg-theme-bg-color)',
						}}
					>
						{data?.map(item => (
							<SideBar.Item key={item.id} title={item.name}></SideBar.Item>
						))}
					</SideBar>
				</LoadWidget>
			</div>
			<div
				className={`flex-1 list-view ${canScroll ? 'overflow-y-auto' : ''}`}
				style={{
					backgroundColor: 'var(--tg-theme-secondary-bg-color)',
				}}
				ref={mainElementRef}
			>
				<LoadWidget error={error} loading={loading}>
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
				<div className='h-24'></div>
			</div>
		</div>
	)
}
