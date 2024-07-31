import type { IStoreInfo } from '@/apis/store'
import { Link } from '../Link/Link'

export default function ShopItem({ info }: { info: IStoreInfo }) {
	return (
		<Link
			className='flex mx-2 rounded-md'
			to={`/store?id=${info.id}`}
			style={{
				backgroundColor: 'var(--tg-theme-secondary-bg-color)',
			}}
		>
			<img
				className='rounded-md'
				src={info.image}
				style={{
					width: '5rem',
					height: '5rem',
				}}
			/>
			<div className='ml-2'>
				<div className='text-md font-bold'>{info.name}</div>
			</div>
		</Link>
	)
}
