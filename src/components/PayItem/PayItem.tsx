import { ICartItem } from '@/stores/CartStore'

export default function PayItem({ item }: { item: ICartItem }) {
	return (
		<div
			className='flex rounded-md overflow-hidden shadow-md'
			style={{
				backgroundColor: 'var(--bg-color)',
			}}
		>
			<img src={item.image} className='w-20 h-20 rounded-r-md' />
			<div className='mx-2 flex flex-col justify-between flex-1'>
				<span className='text-sm mt-1'>{item.name}</span>
				<div className='flex justify-between items-baseline'>
					<span className='text-md'>x{item.count}</span>
					<span className='text-lg text-red-400'>${item.price.toFixed(2)}</span>
				</div>
			</div>
		</div>
	)
}
