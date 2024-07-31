import { MainButton } from '@twa-dev/sdk/react'
import { List } from 'antd-mobile'
import './PayPage.css'
import { useCartStore } from '../StorePage/CartStore'
import { LocationFill } from 'antd-mobile-icons'
import { useNavigate } from 'react-router-dom'

export default function PayPage() {
	const navigate = useNavigate()
	const cart = useCartStore(state => state.cart)
	const price = useCartStore(state => state.price)

	return (
		<div className=''>
			<List
				style={{
					'--active-background-color': 'var(--tg-theme-secondary-bg-color)',
					'--border-bottom':
						'1px solid var(--tg-theme-section-separator-color)',
					'--border-inner': '1px solid var(--tg-theme-section-separator-color)',
				}}
			>
				<List.Item prefix={<LocationFill />} onClick={() => navigate('/address')}>
					Pandda Bank{' '}
				</List.Item>
				<List.Item extra={'汇旺支付'} onClick={() => {}}>
					付款方式
				</List.Item>
			</List>
			<div className='space-y-2 mx-3 mt-2'>
				{cart.map((item, index) => {
					return (
						<div
							key={index}
							className='flex rounded-md overflow-hidden'
							style={{
								backgroundColor: 'var(--tg-theme-secondary-bg-color)',
							}}
						>
							<img src={item.image} className='w-20 h-20 rounded-r-md' />
							<div className='mx-2 flex flex-col justify-between flex-1'>
								<span className='text-sm mt-1'>{item.name}</span>
								<div className='flex justify-between items-baseline'>
									<span className='text-md'>x{item.count}</span>
									<span className='text-lg text-red-400'>
										${item.price.toFixed(2)}
									</span>
								</div>
							</div>
						</div>
					)
				})}
			</div>
			<List
				style={{
					'--active-background-color': 'var(--tg-theme-secondary-bg-color)',
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
				className='fixed bottom-0 w-full rounded-t-lg p-2 flex justify-between'
				style={{
					backgroundColor: 'var(--tg-theme-secondary-bg-color)',
				}}
			>
				<span className='font-bold text-lg'>总计</span>
				<span className='font-bold text-lg'>$ 0.00</span>
			</div>
			<MainButton text='支付' onClick={() => {}}></MainButton>
		</div>
	)
}
