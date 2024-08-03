import { Divider } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'

export default function OrderItem() {
	const navigate = useNavigate()

	const onClick = () => {
		navigate('/orderDetails?id=123')
	}

	const oneMoreClick = (e: React.MouseEvent) => {
		console.log('再来一单')
		e.stopPropagation()
	}

	return (
		<div
			onClick={onClick}
			className='p-3 m-2 rounded-md shadow-md text-sm'
			style={{
				backgroundColor: 'var(--bg-color)',
			}}
		>
			<div className='flex justify-between'>
				<div className='font-bold text-sm'>意向餐饮店</div>
				<div className='text-sm'>已完成</div>
			</div>
			<Divider
				style={{
					margin: '4px 0',
					borderColor: 'var(--tg-theme-section-separator-color)',
				}}
			/>
			<div className='flex space-x-2 mt-2'>
				{Array.from({ length: 3 }).map((_, index) => {
					return (
						<div className='w-20' key={index}>
							<div className='w-20 h-20 bg-gray-400 rounded-md'></div>
							<div className='text-xs mt-1 font-black truncate mx-2'>
								好吃好吃的炒饭123123
							</div>
						</div>
					)
				})}
			</div>
			<div className='flex space-x-2 justify-end mt-2'>
				<div className='hint'>2024-7-21 18:20</div>
				<div className='hint'>共4件</div>
				<div className='font-bold'>总计: $12.33</div>
			</div>
			<div className='flex justify-end mt-2'>
				<button className='h-8 px-3 rounded-full' onClick={oneMoreClick}>
					再来一单
				</button>
			</div>
		</div>
	)
}
