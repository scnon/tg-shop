export default function CartBar() {
	return (
		<div className='fixed bg-gray-300 h-14 bottom-4 left-4 right-4 rounded-full flex items-center overflow-hidden justify-between'>
			<div>
				<div className='w-24 bg-yellow-500 h-full'></div>
				<div className='font-mono text-xl font-bold ml-4'>$0.00</div>
			</div>
			<div className='w-24 bg-red-500 h-full flex items-center justify-center'>
				<div className='text-white text-lg text-center'>结算</div>
			</div>
		</div>
	)
}
