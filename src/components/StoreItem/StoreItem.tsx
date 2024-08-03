import type { IStoreInfo } from '@/apis/store'
import { Link } from '../Link/Link'
import { Skeleton, Tag } from 'antd-mobile'
import { StarFill } from 'antd-mobile-icons'

export default function ShopItem({ info }: { info: IStoreInfo }) {
	return (
		<Link
			className='flex mx-2 rounded-md shadow-md primary'
			to={`/store?id=${info.id}`}
			replace={false}
		>
			<img className='rounded-md h-28 w-28' src={info.image} />
			<div className='ml-2 flex flex-col'>
				<div className='text-base font-bold'>{info.name}</div>
				<div className='hint'>{info.notice}</div>
				<div className='mt-1 text-sm flex'>
					<StarFill fontSize={16} className='text-red-500 mr-1' />
					<div>
						5.0<span className='hint ml-1'>(1829)</span>
					</div>
				</div>
				<div>
					<Tag fill='outline' color='#ff3333'>
						${info.deliveryPrice}起送
					</Tag>
				</div>
				<div className='mt-1 text-base'>{info.address}</div>
			</div>
		</Link>
	)
}

export const ShopItemLoading = () => {
	return (
		<div className='flex mx-2 rounded-md'>
			<Skeleton className='rounded-md h-28 w-28' animated></Skeleton>
			<div className='ml-2 flex flex-col justify-between'>
				<Skeleton
					animated
					className='text-base font-bold h-6 w-40 rounded-md'
				></Skeleton>
				<Skeleton animated className='hint h-4 w-32 rounded-md'></Skeleton>
				<Skeleton animated className='mt-1 h-5 flex w-20 rounded-md'></Skeleton>
				<Skeleton animated className='mt-1 h-6 w-52 rounded-md'></Skeleton>
			</div>
		</div>
	)
}
