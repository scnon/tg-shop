import CartBar from '@/components/CartBar/CartBar'
import StoreInfo from '@/components/StoreInfo/StoreInfo'
import StoreMenu from '@/components/StoreMenu/StoreMenu'
import { Popup } from 'antd-mobile'
import { useCartStore, usePopupStore } from './CartStore'
import { MainButton } from '@twa-dev/sdk/react'
import { useNavigate } from 'react-router-dom'
import WebApp from '@twa-dev/sdk'

export default function StorePage() {
	const id = new URLSearchParams(window.location.search).get('id') || ''
	const visible = usePopupStore(state => state.visiable)
	const popContent = usePopupStore(state => state.content)
	const doClosePopup = usePopupStore(state => state.close)
	const mainVisible = useCartStore(state => state.visible)
	const price = useCartStore(state => state.price)
	const navigate = useNavigate()

	const closePopup = () => {
		doClosePopup()

		if (mainVisible) {
			WebApp.MainButton.setText(`$${price.toFixed(2)} 结算`)
			WebApp.MainButton.onClick(() => navigate('/pay'))
		} else {
			WebApp.MainButton.hide()
		}
	}

	return (
		<div className='flex flex-col' style={{}}>
			<StoreInfo id={id} />
			<StoreMenu id={id} />
			<CartBar />
			<Popup
				visible={visible}
				bodyStyle={{
					borderTopLeftRadius: '1rem',
					borderTopRightRadius: '1rem',
					backgroundColor: 'var(--tg-theme-bg-color)',
				}}
				onClose={closePopup}
				onMaskClick={closePopup}
			>
				{popContent}
			</Popup>
			{mainVisible && (
				<MainButton
					text={`$${price.toFixed(2)} 结算`}
					onClick={() => {
						navigate('/pay')
					}}
				/>
			)}
		</div>
	)
}
