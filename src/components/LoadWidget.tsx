export default function LoadWidget({
	error,
	loading,
	children,
	loadingNode,
	errorNode,
}: {
	error: Error | undefined
	loading: boolean
	children: React.ReactNode
	loadingNode?: React.ReactNode
	errorNode?: React.ReactNode
}) {
	if (loading) return loadingNode ?? <div>Loading...</div>
	if (error) return errorNode ?? <div>Error: {error.message}</div>
	return <div>{children}</div>
}
