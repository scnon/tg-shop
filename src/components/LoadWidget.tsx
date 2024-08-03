import { Skeleton } from 'antd-mobile'
import { ReactNode } from 'react'

export default function LoadWidget({
	error,
	loading,
	children,
	loadingNode,
	errorNode,
	list,
	height,
}: {
	error: Error | undefined
	loading: boolean
	children: ReactNode
	loadingNode?: ReactNode
	errorNode?: ReactNode
	list?: boolean
	height?: string
}) {
	if (loading) return <Loading list={list} node={loadingNode} height={height} />
	if (error) return errorNode ?? <div>Error: {error.message}</div>
	return <div>{children}</div>
}

const Loading = ({
	list,
	node,
	height,
}: {
	list?: boolean
	node?: ReactNode | null
	height?: string
}) => {
	console.log('loading')
	if (list) {
		return (
			<div className='space-y-2'>
				{Array.from({ length: 10 }, (_, i) => (
					<div key={i} className='px-2'>
						{node ?? (
							<Skeleton
								className={`${height ?? 'h-20'} rounded-md`}
								animated
							/>
						)}
					</div>
				))}
			</div>
		)
	}
	return (
		<div className='px-2'>
			{node ?? <Skeleton className={`${height ?? 'h-20'} rounded-md`} animated />}
		</div>
	)
}
