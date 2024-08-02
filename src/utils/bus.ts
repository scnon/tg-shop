import mitt from 'mitt'
import { ReactElement } from 'react'

type Event = {
	show: ReactElement
	hide: boolean
	text: string
}

const bus = mitt<Event>()
export default bus
