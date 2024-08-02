import { IProduct } from '@/apis/store'
import ProductBtn from './ProductBtn'

export default function ProductItem({ info }: { info: IProduct }) {
	return (
		<div
			className='root flex ml-2 rounded-l-md overflow-hidden shadow-md'
			style={{
				backgroundColor: 'var(--bg-color)',
			}}
		>
			<img src={info.image} className='w-20 h-20 rounded-r-md' />
			<div className='mx-2 mt-1 flex flex-col justify-between flex-1'>
				<div className='font-bold'>{info.storeName}</div>
				<div className='flex-1 hint'>{info.productAttr[0].attrValues}</div>
				<div className='flex justify-between items-baseline mb-1'>
					<div className='flex items-baseline justify-center text-red-500 font-bold'>
						<div className='leading-3 text-sm'>$</div>
						<div className='font-sans text-lg leading-3'>
							{info.price.toFixed(2)}
						</div>
					</div>

					<ProductBtn info={info} />
				</div>
			</div>
		</div>
	)
}
