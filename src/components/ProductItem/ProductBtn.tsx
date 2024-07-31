import { IProduct } from '@/apis/store'
import { usePopupStore } from '@/pages/StorePage/CartStore'
import { Stepper } from 'antd-mobile'
import ProductAttrPopup from './ProductAttrPopup'

export default function ProductBtn({
	info,
	value,
	onChange,
}: {
	info: IProduct
	value: number
	onChange: (val: number) => void
}) {
	const showPopup = usePopupStore(state => state.open)

	if (info.productAttr.length > 1) {
		return (
			<button
				onClick={() => showPopup(<ProductAttrPopup info={info} />)}
				className='flex items-center justify-center h-7 rounded-sm px-2 font-bold '
				style={{
					backgroundColor: 'var(--tg-theme-button-color)',
				}}
			>
				选规格
			</button>
		)
	}
	return (
		<Stepper
			step={1}
			min={0}
			inputReadOnly
			style={{
				'--button-text-color': 'var(--tg-theme-button-text-color)',
				'--button-background-color': 'var(--tg-theme-button-color)',
				'--input-background-color': 'var(--tg-theme-bg-color)',
				'--input-width': '2rem',
				'--input-font-size': '1rem',
				'--input-font-color':
					value > 0 ? 'var(--tg-theme-text-color)' : 'transparent',
			}}
			value={value}
			onChange={onChange}
		></Stepper>
	)
}
