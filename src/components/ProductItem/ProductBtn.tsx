import { IProduct } from '@/apis/store'
import ProductAttrPopup from './ProductAttrPopup'
import bus from '@/utils/bus'
import { useCallback, useState } from 'react'
import { useCartStore } from '@/pages/StorePage/CartStore'

export default function ProductBtn({ info }: { info: IProduct }) {
	const [count, setCount] = useState(0)
	const update = useCartStore(state => state.update)

	const onClick = useCallback(() => {
		console.log('ProductBtn onClick')
		bus.emit('show', <ProductAttrPopup info={info} />)
	}, [])

	const onchange = (val: number) => {
		const newVal = Math.max(0, count + val)
		if (newVal === count) return

		setCount(newVal)
		update({
			id: info.id,
			count: newVal,
			attrValue: '',
			price: info.price,
			cate: '0',
			image: info.image,
			name: info.storeName,
		})
	}

	if (info.productAttr.length > 1) {
		return (
			<button
				onClick={onClick}
				className='flex items-center justify-center h-7 rounded-md px-2 font-bold '
			>
				选规格
			</button>
		)
	}
	return (
		<div className='flex items-baseline text-2xl font-mono leading-3'>
			{count > 0 && (
				<button onClick={() => onchange(-1)} className='w-6 h-6  rounded-full'>
					-
				</button>
			)}
			{count > 0 && (
				<div className='w-7 h-6 text-center font-sans text-xl'>{count}</div>
			)}
			<button onClick={() => onchange(1)} className='w-6 h-6  rounded-full'>
				+
			</button>
		</div>
	)
}
