import { getAddressList } from '@/apis/address'
import AddressItem from '@/components/AddressItem'
import LoadWidget from '@/components/LoadWidget'
import { MainButton } from '@twa-dev/sdk/react'
import { useRequest } from 'ahooks'
import { Divider } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'

export default function AddressPage() {
	const navigate = useNavigate()
	const { data, error, loading } = useRequest(() => getAddressList())

	const onClickAdd = () => {
		navigate('/address/add')
	}

	return (
		<div className='h-screen'>
			<div className='primary py-2'>
				<div
					onClick={onClickAdd}
					className='flex mb-2 px-2 items-center font-black space-x-2 text-lg'
				>
					地址列表
				</div>
				<Divider
					style={{
						margin: '0 16px',
						borderColor: 'var(--tg-theme-section-separator-color)',
					}}
				/>
				<LoadWidget error={error} loading={loading}>
					{data?.map((address, index) => (
						<AddressItem key={index} address={address} />
					))}
				</LoadWidget>
			</div>
			<MainButton text='添加新地址' onClick={onClickAdd} />
		</div>
	)
}
