import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'

type Props = {
	width?: string | number
	height?: string | number
	position?: any
	right?: any
	top?: any
	bottom?: any
	left?: any
	fov?: number
	children?: React.ReactNode | JSX.Element
	autoRotateSpeed?: number
}

const CustomCanvas = ({
	width = '400px',
	height = '400px',
	position = 'absolute',
	right = 'unset',
	top = 'unset',
	bottom = 'unset',
	left = 'unset',
	fov = 30,
	children,
	autoRotateSpeed
}: Props) => {
	return (
		<Canvas
			camera={{ position: [0, 0, 12.25], fov }}
			style={{
				width,
				height,
				bottom,
				left,
				position: position as any,
				right,
				top
			}}
		>
			<ambientLight intensity={1.8} />
			<ambientLight intensity={1} />
			<directionalLight intensity={0.4} />
			<Suspense fallback={null}>{children}</Suspense>
			<OrbitControls autoRotate enableZoom={false} autoRotateSpeed={autoRotateSpeed} enableRotate />
		</Canvas>
	)
}

export default CustomCanvas
