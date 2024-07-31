import { IProduct } from '@/apis/store'
import { Stepper } from 'antd-mobile'
import { useState } from 'react'

export default function ProductItem({ info }: { info: IProduct }) {
	const [value, setValue] = useState(0)

	return (
		<div className='flex bg-gray-200 mx-2 rounded-md p-2'>
			<img src={info.image} className='w-20 h-20' />
			<div className='ml-2 flex flex-col justify-between flex-1'>
				<div className=' text-base'>{info.storeName}</div>
				<div className='flex justify-between'>
					<div className='text-red-600 text-lg font-mono'>${info.price}</div>
					{value === 0 && (
						<div
							className='bg-yellow-500 rounded-full h-8 w-8 text-white text-3xl text-center leading-7'
							onClick={() => setValue(1)}
						>
							+
						</div>
					)}
					{value > 0 && (
						<div className='font-mono'>
							<Stepper
								step={1}
								min={0}
								value={value}
								onChange={val => setValue(val)}
							></Stepper>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
