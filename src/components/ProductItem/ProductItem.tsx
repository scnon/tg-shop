import { IProduct } from '@/apis/store'
import { useState } from 'react'
import './ProductItem.css'
import ProductBtn from './ProductBtn'
import { useCartStore } from '@/pages/StorePage/CartStore'

export default function ProductItem({ info }: { info: IProduct }) {
	const [value, setValue] = useState(0)
	const update = useCartStore(state => state.update)

	const handleChange = (val: number) => {
		setValue(val)
		update({
			id: info.id,
			count: val,
			attrValue: '',
			price: info.price,
			cate: '0',
			image: info.image,
			name: info.storeName,
		})
	}

	return (
		<div
			className='flex ml-2 rounded-l-md overflow-hidden'
			style={{
				backgroundColor: 'var(--tg-theme-section-bg-color)',
			}}
		>
			<img src={info.image} className='w-20 h-20 rounded-r-md' />
			<div className='mx-2 my-1 flex flex-col justify-between flex-1'>
				<div className=' text-base'>{info.storeName}</div>
				<div>{info.productAttr[0].attrValues}</div>
				<div className='flex justify-between'>
					<div className='flex items-baseline'>
						<span className='text-red-500 text-xl '>$</span>
						<span className='text-red-500 text-xl font-sans'>
							{info.price.toFixed(2)}
						</span>
					</div>

					<ProductBtn info={info} value={value} onChange={handleChange} />
				</div>
			</div>
		</div>
	)
}
