import { MainButton } from '@twa-dev/sdk/react'
import { List } from 'antd-mobile'
import { useCartStore } from '../../stores/CartStore'
import { LocationFill } from 'antd-mobile-icons'
import { useNavigate } from 'react-router-dom'
import PayItem from '@/components/PayItem/PayItem'
import { CSSProperties } from 'react'

export default function PayPage() {
	const navigate = useNavigate()
	const cart = useCartStore(state => state.cart)
	const price = useCartStore(state => state.price)

	return (
		<div
			className='root h-screen'
			style={
				{
					backgroundColor: 'var(--secondary-color)',
					'--adm-color-background': 'var(--bg-color)',
				} as CSSProperties
			}
		>
			<List
				style={{
					'--border-top': '6px solid var(--secondary-color)',
					'--active-background-color': 'var(--bg-color)',
					'--border-bottom':
						'1px solid var(--tg-theme-section-separator-color)',
					'--border-inner': '1px solid var(--tg-theme-section-separator-color)',
				}}
			>
				<List.Item
					prefix={<LocationFill fontSize={24} />}
					onClick={() => navigate('/address')}
					description={'x, 13112344321'}
				>
					Pandda Bank{' '}
				</List.Item>
				<List.Item extra={'汇旺支付'} onClick={() => {}}>
					付款方式
				</List.Item>
			</List>
			<div className='space-y-2 mx-2 mt-2 pb-2'>
				{cart.map((item, index) => {
					return <PayItem key={index} item={item} />
				})}
			</div>
			<List
				style={{
					'--border-top': 'none',
					'--border-bottom':
						'1px solid var(--tg-theme-section-separator-color)',
					'--border-inner': '1px solid var(--tg-theme-section-separator-color)',
				}}
			>
				<List.Item extra={`$ ${price.toFixed(2)}`}>小计</List.Item>
				<List.Item extra={'$ 0.00'}>配送费</List.Item>
				<List.Item extra={'$ 0.00'}>优惠券</List.Item>
			</List>
			<div
				className='fixed bottom-0 w-full rounded-t-lg p-2 flex justify-between overflow-hidden shadow-lg'
				style={{
					backgroundColor: 'var(--bg-color)',
				}}
			>
				<span className='font-bold text-lg'>总计</span>
				<span className='font-bold text-lg'>$ 0.00</span>
			</div>
			<MainButton text='支付' onClick={() => {}}></MainButton>
		</div>
	)
}
