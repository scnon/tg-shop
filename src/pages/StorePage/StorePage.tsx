import StoreInfo from '@/components/StoreInfo/StoreInfo'
import StoreMenu from '@/components/StoreMenu/StoreMenu'
import { Popup } from 'antd-mobile'
import { ReactElement, useCallback, useEffect, useRef, useState } from 'react'
import bus from '@/utils/bus'
import { useCartStore } from '../../stores/CartStore'
import { useNavigate } from 'react-router-dom'
import { useThrottleFn } from 'ahooks'
import { MainButton } from '@twa-dev/sdk/react'

export default function StorePage() {
	const [id, setId] = useState('')
	const [popContent, setPopContent] = useState<ReactElement | null>(null)
	const [visible, setVisible] = useState(false)
	const price = useCartStore(state => state.price)
	const [text, setText] = useState('')
	const [show, setShow] = useState(false)
	const navigate = useNavigate()
	const mainScroll = useRef<HTMLDivElement>(null)
	const [canScroll] = useState(true)

	const closePopup = useCallback(() => {
		setVisible(false)
		updateMainButton()
	}, [visible])

	const updateMainButton = useCallback(() => {
		if (visible) {
			setVisible(false)
		}

		if (price > 0) {
			setText(`$${price.toFixed(2)} | 去结算`)
			if (!show) {
				setShow(true)
			}
		} else {
			setShow(false)
		}
	}, [visible, price, show])

	const { run: handleScroll } = useThrottleFn(
		() => {
			console.log(111111)
		},
		{
			leading: true,
			trailing: true,
			wait: 100,
		}
	)

	useEffect(() => {
		updateMainButton()
	}, [price])

	useEffect(() => {
		const mainElement = mainScroll.current
		if (!mainElement) return
		console.log(mainElement)
		return () => {
			mainElement.removeEventListener('scroll', handleScroll)
		}
	}, [mainScroll, handleScroll])

	const onMainButtonClick = useCallback(() => {
		if (visible) {
			setVisible(false)
			updateMainButton()
		} else {
			navigate('/pay')
		}
	}, [visible])

	useEffect(() => {
		const search = new URLSearchParams(window.location.search)
		setId(search.get('id') || '')

		bus.on('show', (show: ReactElement) => {
			setVisible(true)
			setPopContent(show)
			setText('确定')
			setShow(true)
		})
		bus.on('text', (text: string) => {
			setText(text)
		})
		return () => {
			setVisible(false)
			bus.off('show')
			bus.off('text')
		}
	}, [])

	if (id.trim() === '') {
		return <div>404</div>
	}

	return (
		<div ref={mainScroll} className='flex flex-col h-screen'>
			<div className='overflow-y-auto hide-scrollbar'>
				<StoreInfo id={id} />
				<StoreMenu canScroll={canScroll} id={id} />
				<Popup
					visible={visible}
					showCloseButton
					bodyStyle={{
						borderTopLeftRadius: '1rem',
						borderTopRightRadius: '1rem',
						backgroundColor: 'var(--bg-color)',
					}}
					onClose={closePopup}
					onMaskClick={closePopup}
				>
					{popContent}
				</Popup>
				{show && (
					<MainButton text={text} onClick={onMainButtonClick}></MainButton>
				)}
			</div>
		</div>
	)
}
