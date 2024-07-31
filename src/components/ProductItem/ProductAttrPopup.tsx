import { IProduct } from '@/apis/store'
import { useCartStore, usePopupStore } from '@/pages/StorePage/CartStore'
import WebApp from '@twa-dev/sdk'
import { CapsuleTabs } from 'antd-mobile'

export default function ProductAttrPopup({ info }: { info: IProduct }) {
	const close = usePopupStore(state => state.close)
	const update = useCartStore(state => state.update)

	WebApp.MainButton.setText('确定')
	WebApp.MainButton.onClick(() => {
		update({
			id: info.id,
			count: 1,
			attrValue: '',
			price: info.price,
			cate: '0',
			image: info.image,
			name: info.storeName,
		})
		close()
	})
	WebApp.MainButton.show()

	return (
		<div className='p-4'>
			<div>
				{info.productAttr.map((attr, index) => {
					return (
						<div key={index}>
							<span className='font-bold text-md'>{attr.attrName}</span>
							<CapsuleTabs>
								{attr.attrValue.map((value, index) => {
									return (
										<CapsuleTabs.Tab
											key={index}
											title={value.attr}
										></CapsuleTabs.Tab>
									)
								})}
							</CapsuleTabs>
						</div>
					)
				})}
			</div>
		</div>
	)
}
