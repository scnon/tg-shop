import CartBar from '@/components/CartBar/CartBar'
import StoreInfo from '@/components/StoreInfo/StoreInfo'
import StoreMenu from '@/components/StoreMenu/StoreMenu'

export default function StorePage() {
	// useEffect(() => {
	// 	getStoreDetail('6').then(res => {
	// 		setInfo(res)
	// 	})

	// 	getStoreMenu('6').then(res => {
	// 		console.log(res)
	// 		setMenu(res)
	// 	})
	// }, [])

	return (
		<div className='flex flex-col overflow-hidden h-screen'>
			<StoreInfo id='2' />
			<StoreMenu id='2' />
			<CartBar />
		</div>
	)
}
