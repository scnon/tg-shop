import { getStoreDetail } from '@/apis/store'
import { useRequest } from 'ahooks'
import LoadWidget from '../LoadWidget'

export default function ShopInfo({ id }: { id: string }) {
	const { data, error, loading } = useRequest(() => getStoreDetail(id))

	return (
		<div className='h-40'>
			<LoadWidget error={error} loading={loading}>
				<img src={data?.image} className='h-20 w-full' />
				<div className='flex mx-2 mt-2'>
					<div className='flex-1'>
						<div className='font-bold text-lg'>{data?.name}</div>
						<div>4.8</div>
					</div>
					<img src={data?.image} className='w-12 rounded-full'></img>
				</div>
				<div className='mx-2'>2.8km</div>
			</LoadWidget>
		</div>
	)
}
