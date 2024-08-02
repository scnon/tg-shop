import { getStoreList } from '@/apis/store'
import LoadWidget from '@/components/LoadWidget'
import ShopItem from '@/components/StoreItem/StoreItem'
import { useRequest } from 'ahooks'
import { InfiniteScroll, Swiper } from 'antd-mobile'
import { DownFill, LocationFill } from 'antd-mobile-icons'
import { useState } from 'react'

export default function HomePage() {
	const [hasMore, setHasMore] = useState(false)
	const { data, error, loading } = useRequest(() =>
		getStoreList({ lng: 0, lat: 0, kw: '', shop_id: 0 })
	)

	const loadMore = async () => {}

	return (
		<div className='primary flex-grow overflow-auto hide-scrollbar'>
			<div
				className='h-9 px-2 text-base flex pb-3 items-center'
				style={{
					backgroundColor: 'var(--bg-color)',
				}}
			>
				<LocationFill fontSize={22} />
				<div className='pl-2 mt-1 font-bold flex-1'>Panda Bank St. 527</div>
				<DownFill fontSize={18} />
			</div>
			<div className='my-3'>
				<Swiper autoplay loop>
					{Array.from({ length: 3 }, (_, i) => (
						<Swiper.Item key={i} className='px-4'>
							<img
								className='rounded-md'
								src='https://via.placeholder.com/375x200'
								alt=''
							/>
						</Swiper.Item>
					))}
				</Swiper>
			</div>
			<div className='px-2 h-6 font-bold text-sm'>店铺列表</div>
			<LoadWidget loading={loading} error={error}>
				<div className='space-y-2'>
					{data?.map((shop, index) => (
						<ShopItem key={index} info={shop} />
					))}
				</div>
				<div className='space-y-2 mt-2'>
					{data?.map((shop, index) => (
						<ShopItem key={index} info={shop} />
					))}
				</div>
				<div className='space-y-2 mt-2'>
					{data?.map((shop, index) => (
						<ShopItem key={index} info={shop} />
					))}
				</div>
			</LoadWidget>
			<InfiniteScroll className='hint' loadMore={loadMore} hasMore={hasMore} />
		</div>
	)
}
