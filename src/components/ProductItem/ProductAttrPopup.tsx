import { IProduct } from '@/apis/store'
import { CapsuleTabs, Divider } from 'antd-mobile'
import { CSSProperties } from 'react'

export default function ProductAttrPopup({ info }: { info: IProduct }) {
	return (
		<div
			className='p-2'
			style={
				{ '--adm-color-fill-content': 'var(--secondary-color)' } as CSSProperties
			}
		>
			<div className='font-bold text-lg'>{info.storeName}</div>
			<Divider
				style={{
					margin: '10px 0',
					borderColor: 'var(--tg-theme-section-separator-color)',
				}}
			/>
			<div>
				{info.productAttr.map((attr, index) => {
					return (
						<div key={index}>
							<span className='font-bold text-md'>{attr.attrName}</span>
							<CapsuleTabs
								style={
									{
										'--adm-color-border':
											'var(--tg-theme-section-separator-color)',
									} as CSSProperties
								}
							>
								{attr.attrValue.map((value, index) => {
									return (
										<CapsuleTabs.Tab
											style={{
												maxWidth: '150px',
											}}
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
