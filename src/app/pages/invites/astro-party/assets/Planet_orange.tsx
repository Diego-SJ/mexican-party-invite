import { useGLTF, PerspectiveCamera } from '@react-three/drei'

const PlanetOrange = (props: any) => {
	const { nodes, materials }: any = useGLTF('/planet_orange.glb')
	return (
		<group {...props} dispose={null}>
			<PerspectiveCamera
				makeDefault={false}
				far={10000}
				near={1}
				fov={45.837}
				position={[-1.628, 2, 7.833]}
			/>
			<group position={[0, 0.053, 0]} scale={0.936}>
				<mesh geometry={nodes.Sphere.geometry} material={materials.Yellow} scale={1.162} />
				<mesh geometry={nodes.Sphere001.geometry} material={materials.Orange} scale={1.183} />
			</group>
			<group position={[-1.087, 1.292, -0.009]} rotation={[-0.001, -0.009, -0.152]} scale={0.337}>
				<mesh
					geometry={nodes.BezierCircle.geometry}
					material={materials.Purple}
					position={[0.104, -0.114, 0.007]}
					rotation={[-0.003, 0.021, 0.379]}
					scale={[1.253, 0.348, 1.137]}
				/>
				<mesh
					geometry={nodes.Sphere003.geometry}
					material={materials.Pink}
					position={[0.031, 0.003, 0.008]}
					rotation={[0.766, -0.872, 2.322]}
					scale={0.869}
				/>
				<mesh
					geometry={nodes.Sphere005.geometry}
					material={materials['Light purple']}
					position={[0.031, 0.003, 0.008]}
					rotation={[0.766, -0.872, 2.322]}
					scale={0.885}
				/>
			</group>
			<group position={[1.208, -1.058, -0.003]} scale={0.343}>
				<mesh
					geometry={nodes.Sphere002.geometry}
					material={materials['Light purple']}
					position={[0.013, 0.003, 0.178]}
					rotation={[-0.684, 0.059, 1.793]}
					scale={0.93}
				/>
				<mesh
					geometry={nodes.Sphere004.geometry}
					material={materials.Purple}
					position={[0.013, 0.003, 0.178]}
					rotation={[-0.684, 0.059, 1.793]}
					scale={0.947}
				/>
			</group>
			<mesh
				geometry={nodes.Plane003.geometry}
				material={materials['Light yellow']}
				position={[-1.304, 0.477, 0.186]}
				rotation={[1.533, 0.396, 0.044]}
				scale={[0.013, 0.061, 0.05]}
			/>
			<mesh
				geometry={nodes.Plane001.geometry}
				material={materials.Purple}
				position={[1.287, -0.148, 0.213]}
				rotation={[1.53, -0.265, 0.056]}
				scale={[0.012, 0.053, 0.043]}
			/>
			<mesh
				geometry={nodes.Plane002.geometry}
				material={materials['Light yellow']}
				position={[-0.359, -1.221, 0.279]}
				rotation={[1.53, -0.265, 0.056]}
				scale={[0.011, 0.049, 0.04]}
			/>
			<mesh
				geometry={nodes.Plane004.geometry}
				material={materials.Purple}
				position={[0.585, 1.344, 0.131]}
				rotation={[1.53, -0.265, 0.056]}
				scale={[0.01, 0.048, 0.039]}
			/>
			<mesh
				geometry={nodes.BezierCircle001.geometry}
				material={materials.Orange}
				position={[-1.073, -0.152, 1.351]}
				rotation={[-1.067, -1.451, -2.835]}
				scale={0.035}
			/>
			<mesh
				geometry={nodes.Cone002.geometry}
				material={materials['Light yellow']}
				position={[-0.067, 1.213, 1.352]}
				rotation={[0.219, 0.911, -0.662]}
				scale={[-0.051, 0.039, 0.051]}
			/>
			<mesh
				geometry={nodes.Star001.geometry}
				material={materials['Light yellow']}
				position={[0.803, 0.976, 1.246]}
				rotation={[-1.571, 0.052, 0.012]}
				scale={[0.116, 0.085, -0.116]}
			/>
			<mesh
				geometry={nodes.Star002.geometry}
				material={materials['Light yellow']}
				position={[-0.853, -0.642, 1.342]}
				rotation={[-1.571, 0.052, 0.012]}
				scale={[0.096, 0.07, -0.096]}
			/>
		</group>
	)
}

useGLTF.preload('/planet_orange.glb')

export default PlanetOrange
