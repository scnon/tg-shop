import { IOrderListItem } from '@/apis/order'
import { Divider, Image, Skeleton } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'

export default function OrderItem({
	info,
	style,
}: {
	info: IOrderListItem
	style?: React.CSSProperties
}) {
	const navigate = useNavigate()

	const onClick = () => {
		navigate('/orderDetails?id=123')
	}

	const oneMoreClick = (e: React.MouseEvent) => {
		console.log('再来一单')
		e.stopPropagation()
	}

	return (
		<div style={style} className='flex flex-col'>
			<div
				onClick={onClick}
				className='flex-1 p-3 m-2 mb-0.5 rounded-md shadow-md text-sm'
				style={{
					backgroundColor: 'var(--bg-color)',
				}}
			>
				<div className='flex justify-between'>
					<div className='font-bold text-sm'>{info.shop.name}</div>
					<div className='text-sm'>{info.status}</div>
				</div>
				<Divider
					style={{
						margin: '4px 0',
						borderColor: 'var(--tg-theme-section-separator-color)',
					}}
				/>
				<div className='flex space-x-2 mt-2 overflow-hidden'>
					{info.cartInfo.map((cart, index) => {
						return (
							<div className='w-20' key={index}>
								<Image
									src={cart.image.replace(
										'http://localhost:48081',
										'https://test-server.huione.life'
									)}
									className='w-20 h-20 rounded-md'
								></Image>
								<div className='text-xs mt-1 font-black truncate mx-2'>
									{info.cartInfo[0].title}
								</div>
							</div>
						)
					})}
				</div>
				<div className='flex space-x-2 justify-end mt-2'>
					<div className='hint'>
						{new Date(info.createTime).toLocaleString()}
					</div>
					<div className='hint'>共 {info.cartInfo.length} 件</div>
					<div className='font-bold'>总计: $ {info.payPrice.toFixed(2)}</div>
				</div>
				<div className='flex justify-end mt-2'>
					<button className='h-8 px-3 rounded-full' onClick={oneMoreClick}>
						再来一单
					</button>
				</div>
			</div>
		</div>
	)
}

export const OrderItemLoading = () => {
	return (
		<div className='flex flex-col'>
			<div className='flex-1 p-3 m-2 mb-0.5 rounded-md shadow-md text-sm primary'>
				<Skeleton className='font-bold h-5 rounded-sm' animated></Skeleton>
				<Divider
					style={{
						margin: '4px 0',
						borderColor: 'var(--tg-theme-section-separator-color)',
					}}
				/>
				<div className='flex space-x-2 mt-2 overflow-hidden'>
					{Array.from({ length: 4 }).map((_, index) => {
						return (
							<div className='w-20' key={index}>
								<Skeleton
									animated
									className='w-20 h-20 rounded-md'
								></Skeleton>
								<div className='text-xs mt-1 font-black truncate mx-2'></div>
							</div>
						)
					})}
				</div>
				<Skeleton.Title animated className='w-full'></Skeleton.Title>
				<div className='flex justify-end mt-2'>
					<Skeleton animated className='h-8 px-3 w-20 rounded-full'></Skeleton>
				</div>
			</div>
		</div>
	)
}
