import type { IStoreInfo } from '@/apis/store'
import { Link } from '../Link/Link'

export default function ShopItem({ info }: { info: IStoreInfo }) {
	return (
		<Link
			className='flex mx-2 rounded-md shadow-md'
			to={`/store?id=${info.id}`}
			replace={false}
			style={{
				backgroundColor: 'var(--bg-color)',
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
