import { getStoreDetail } from '@/apis/store'
import { useRequest } from 'ahooks'
import LoadWidget from '../LoadWidget'

export default function ShopInfo({ id }: { id: string }) {
	const { data, error, loading } = useRequest(() => getStoreDetail(id))

	return (
		<div className='h-40'>
			<LoadWidget error={error} loading={loading}>
				<div>{data?.name}</div>
			</LoadWidget>
		</div>
	)
}
