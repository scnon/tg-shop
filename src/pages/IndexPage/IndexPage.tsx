import { getStoreList } from '@/apis/store'
import type { IStoreInfo } from '@/apis/store'
import ShopItem from '@/components/StoreItem/StoreItem'
import { useEffect, useState, type FC } from 'react'

export const IndexPage: FC = () => {
	const [shopList, setShopList] = useState<IStoreInfo[]>([])

	useEffect(() => {
		getStoreList({ lng: 0, lat: 0, kw: '', shop_id: 0 }).then(res => {
			setShopList(res)
		})
	}, [])

	return (
		<div>
			<div>
				{shopList.map((shop, index) => (
					<ShopItem key={index} info={shop} />
				))}
			</div>
		</div>
	)
}
