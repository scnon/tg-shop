import { IProduct } from '@/apis/store'
import ProductAttrPopup from './ProductAttrPopup'
import bus from '@/utils/bus'
import { useCallback, useState } from 'react'
import { useCartStore } from '@/stores/CartStore'
import { AddOutline, MinusOutline } from 'antd-mobile-icons'

export default function ProductBtn({ info }: { info: IProduct }) {
	const [count, setCount] = useState(0)
	const update = useCartStore(state => state.update)

	const onClick = useCallback(() => {
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
			image: info.image,
			name: info.storeName,
		})
	}

	if (info.productAttr.length > 1) {
		return (
			<div className='relative'>
				<button
					onClick={onClick}
					className='h-6 rounded-md px-2 font-bold leading-6 font-sans'
				>
					选规格
				</button>
				<div className=' absolute top-0 right-0 w-4 h-4 rounded-full bg-red-500 -translate-y-1 translate-x-1 text-center text-white leading-4'>
					1
				</div>
			</div>
		)
	}
	return (
		<div className='flex items-baseline text-2xl font-sans'>
			{count > 0 && (
				<button
					onClick={() => onchange(-1)}
					className='w-6 h-6 rounded-full flex justify-center items-center'
				>
					<MinusOutline fontSize={18} />
				</button>
			)}
			{count > 0 && <div className='w-7 h-6 text-center text-xl'>{count}</div>}
			<button
				onClick={() => onchange(1)}
				className='w-6 h-6  rounded-full flex items-center justify-center'
			>
				<AddOutline fontSize={18} />
			</button>
		</div>
	)
}
