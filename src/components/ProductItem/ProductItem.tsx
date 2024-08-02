import { IProduct } from '@/apis/store'
import ProductBtn from './ProductBtn'
import './ProductItem.css'

export default function ProductItem({ info }: { info: IProduct }) {
	return (
		<div
			className='root flex ml-2 rounded-l-md overflow-hidden'
			style={{
				backgroundColor: 'var(--tg-theme-section-bg-color)',
			}}
		>
			<img src={info.image} className='w-20 h-20 rounded-r-md' />
			<div className='mx-2 mt-1 flex flex-col justify-between flex-1'>
				<div className='font-bold'>{info.storeName}</div>
				<div className='text-gray-400 flex-1'>
					{info.productAttr[0].attrValues}
				</div>
				<div className='flex justify-between items-baseline'>
					<div className='flex items-baseline text-sm justify-center'>
						<div className='text-red-500'>$</div>
						<div className='text-red-500 font-sans'>
							{info.price.toFixed(2)}
						</div>
					</div>

					<ProductBtn info={info} />
				</div>
			</div>
		</div>
	)
}
