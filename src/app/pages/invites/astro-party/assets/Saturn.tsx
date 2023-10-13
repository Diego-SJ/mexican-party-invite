import { useGLTF, PerspectiveCamera } from '@react-three/drei'

const Saturn = (props: any) => {
	const { nodes, materials }: any = useGLTF('/saturn.glb')
	return (
		<group {...props} dispose={null}>
			<PerspectiveCamera
				makeDefault={false}
				far={10000}
				near={1}
				fov={45.837}
				position={[7.944, 2, 0.948]}
			/>
			<group position={[-0.006, 0.191, 0]} scale={1.26}>
				<mesh
					geometry={nodes.BezierCircle.geometry}
					material={materials.Purple}
					position={[-0.041, 0.099, 0.062]}
					rotation={[0.187, 0.095, 0.368]}
					scale={[1.052, 0.292, 0.955]}
				/>
				<mesh
					geometry={nodes.BezierCircle002.geometry}
					material={materials['Light yellow']}
					position={[-0.041, 0.099, 0.062]}
					rotation={[0.187, 0.095, 0.368]}
					scale={[1.23, 0.341, 1.117]}
				/>
				<mesh
					geometry={nodes.BezierCircle003.geometry}
					material={materials.Pink}
					position={[-0.041, 0.099, 0.062]}
					rotation={[0.187, 0.095, 0.368]}
					scale={[1.395, 0.387, 1.267]}
				/>
				<mesh
					geometry={nodes.Sphere003.geometry}
					material={materials['Light yellow']}
					position={[0.031, 0.003, 0.008]}
					rotation={[-0.079, 0.445, -2.697]}
					scale={0.869}
				/>
				<mesh
					geometry={nodes.Sphere005.geometry}
					material={materials.Yellow}
					position={[0.031, 0.003, 0.008]}
					rotation={[-0.079, 0.445, -2.697]}
					scale={0.885}
				/>
			</group>
			<mesh
				geometry={nodes.Plane003.geometry}
				material={materials.Purple}
				position={[-1.362, 0.327, 0.194]}
				rotation={[1.533, 0.396, 0.044]}
				scale={[0.013, 0.061, 0.05]}
			/>
			<mesh
				geometry={nodes.Plane001.geometry}
				material={materials.Purple}
				position={[1.339, -0.028, 0.206]}
				rotation={[1.53, -0.265, 0.056]}
				scale={[0.012, 0.053, 0.043]}
			/>
			<mesh
				geometry={nodes.Plane002.geometry}
				material={materials['Light yellow']}
				position={[-1.255, -0.822, 0.259]}
				rotation={[1.53, -0.265, 0.056]}
				scale={[0.011, 0.049, 0.04]}
			/>
			<mesh
				geometry={nodes.Plane004.geometry}
				material={materials.Purple}
				position={[0.225, 1.442, 0.126]}
				rotation={[1.53, -0.265, 0.056]}
				scale={[0.01, 0.048, 0.039]}
			/>
			<mesh
				geometry={nodes.BezierCircle001.geometry}
				material={materials.Purple}
				position={[-0.344, -0.694, 1.38]}
				rotation={[-1.212, -1.451, -2.835]}
				scale={0.046}
			/>
			<mesh
				geometry={nodes.Cone002.geometry}
				material={materials['Light yellow']}
				position={[0.79, 1.078, 1.357]}
				rotation={[0.219, 0.911, -0.662]}
				scale={[-0.051, 0.039, 0.051]}
			/>
			<mesh
				geometry={nodes.Star001.geometry}
				material={materials['Light yellow']}
				position={[-0.85, 0.976, 1.251]}
				rotation={[-1.571, 0.052, 0.012]}
				scale={[0.08, 0.059, -0.08]}
			/>
			<mesh
				geometry={nodes.Star002.geometry}
				material={materials['Light yellow']}
				position={[0.755, -0.514, 1.33]}
				rotation={[-1.571, 0.052, 0.012]}
				scale={[0.063, 0.046, -0.063]}
			/>
		</group>
	)
}

useGLTF.preload('/saturn.glb')

export default Saturn
