import { MainButton } from '@twa-dev/sdk/react'
import { useNavigate } from 'react-router-dom'

export default function AddressAddPage() {
	const navigate = useNavigate()

	const onSubmit = () => {
		navigate(-2)
	}

	return (
		<div>
			<div></div>
			<MainButton text='确定' onClick={onSubmit} />
		</div>
	)
}
