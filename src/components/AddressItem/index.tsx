import { IAddress } from '@/apis/address'
import { Tag } from 'antd-mobile'
import { EditFill, LocationFill } from 'antd-mobile-icons'
import { useNavigate } from 'react-router-dom'

export default function AddressItem({ address }: { address: IAddress }) {
	const navigate = useNavigate()

	const editClick = () => {
		navigate(`/address/add?id=${address.id}`)
	}

	return (
		<div className='secondary mx-2 pl-2 rounded-md shadow-md flex overflow-hidden'>
			<div className='flex-1 my-2'>
				<div className='flex'>
					<LocationFill fontSize={24} className='w-12 mt-0.5 mr-2' />
					<div className=' text-lg leading-7'>{address.address}</div>
				</div>
				<div className='flex mt-1 text-sm space-x-2 items-baseline'>
					<Tag className='px-2 py-1 mt-2'>
						{address.isDefault ? '默认' : '非默认'}
					</Tag>
					<div>{address.realName}</div>
					<div>{address.phone}</div>
				</div>
			</div>
			<div
				className='flex items-center w-16 justify-center button'
				onClick={editClick}
			>
				<EditFill fontSize={24} />
			</div>
		</div>
	)
}
