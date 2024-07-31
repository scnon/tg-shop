import type { IStoreInfo } from '@/apis/store'
import { Link } from '../Link/Link'

export default function ShopItem({ info }: { info: IStoreInfo }) {
	return (
		<Link
			to={`/store?id=${info.id}`}
			style={{
				display: 'flex',
				backgroundColor: 'gray',
			}}
		>
			<img
				src={info.image}
				style={{
					width: '5rem',
					height: '5rem',
				}}
			/>
			<div>{info.name}</div>
		</Link>
	)
}
