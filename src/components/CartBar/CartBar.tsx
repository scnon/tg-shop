import { DeleteOutline } from 'antd-mobile-icons'
import { useState } from 'react'

export default function CartBar() {
	const [cartBar] = useState(false)
	const doClear = () => {}

	return (
		<div className='fixed'>
			{cartBar && (
				<div
					className='w-full fixed bottom-0 rounded-t-lg'
					style={{
						backgroundColor: 'var(--tg-theme-section-bg-color)',
					}}
				>
					<div className='flex h-14 items-center px-4 justify-between'>
						<div className='font-bold text-lg'>购物车</div>
						<div className='flex space-x-2' onClick={doClear}>
							<DeleteOutline fontSize={22} />
							<div className='text-sm leading-6'>清空</div>
						</div>
					</div>
					<div
						className='mx-4'
						style={{
							height: '1px',
							backgroundColor: 'var(--tg-theme-section-separator-color)',
						}}
					></div>
				</div>
			)}
		</div>
	)
}
