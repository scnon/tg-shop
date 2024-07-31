import { getStoreMenu } from '@/apis/store'
import { useRequest, useThrottleFn } from 'ahooks'
import { SideBar } from 'antd-mobile'
import { useEffect, useRef, useState } from 'react'
import ProductItem from '../ProductItem/ProductItem'
import LoadWidget from '../LoadWidget'

const items = [
	{ key: '1', title: '第一项', text: 'lorem.generateParagraphs(8)' },
	{ key: '2', title: '第二项', text: 'lorem.generateParagraphs(8)' },
	{ key: '3', title: '第三项', text: 'lorem.generateParagraphs(8)' },
	{ key: '4', title: '第四项', text: 'lorem.generateParagraphs(8)' },
]

export default function ShopMenu({ id }: { id: string }) {
	const { data, error, loading } = useRequest(() => getStoreMenu(id))
	const [tabIdx, setTabIdx] = useState(0)

	const { run: handleScroll } = useThrottleFn(
		() => {
			let currentKey = items[0].key
			for (const item of items) {
				const element = document.getElementById(`anchor-${item.key}`)
				if (!element) continue
				const rect = element.getBoundingClientRect()
				if (rect.top <= 0) {
					currentKey = item.key
				} else {
					break
				}
			}
			setTabIdx(Number(currentKey))
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
	}, [])

	const onTabChange = (key: string) => {
		console.log(key)
		document.getElementById(`anchor-${key}`)?.scrollIntoView()
	}

	return (
		<div className='flex-1 flex overflow-hidden'>
			<div>
				<LoadWidget error={error} loading={loading}>
					<SideBar activeKey={tabIdx?.toString()} onChange={onTabChange}>
						{data?.map(item => (
							<SideBar.Item key={item.id} title={item.name}></SideBar.Item>
						))}
					</SideBar>
				</LoadWidget>
			</div>
			<div className='flex-1 overflow-y-auto' ref={mainElementRef}>
				<LoadWidget error={error} loading={loading}>
					{data?.map(item => (
						<div key={item.id}>
							<div
								id={`anchor-${item.id}`}
								className='ml-4 mb-2 text-lg font-bold'
							>
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
