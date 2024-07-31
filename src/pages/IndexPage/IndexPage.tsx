import { getStoreList } from '@/apis/store'
import LoadWidget from '@/components/LoadWidget'
import ShopItem from '@/components/StoreItem/StoreItem'
import { useRequest } from 'ahooks'

export const IndexPage = () => {
	const { data, error, loading } = useRequest(() =>
		getStoreList({ lng: 0, lat: 0, kw: '', shop_id: 0 })
	)

	return (
		<div className='primary'>
			<LoadWidget loading={loading} error={error}>
				<div className='space-y-2'>
					{data?.map((shop, index) => (
						<ShopItem key={index} info={shop} />
					))}
				</div>
			</LoadWidget>
		</div>
	)
}
