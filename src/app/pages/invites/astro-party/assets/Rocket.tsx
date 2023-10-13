import { useGLTF, PerspectiveCamera } from '@react-three/drei'

const Rocket = (props: any) => {
	const { nodes, materials }: any = useGLTF('/rocket.glb')
	return (
		<group {...props} dispose={null}>
			<PerspectiveCamera
				makeDefault={false}
				far={10000}
				near={1}
				fov={45.837}
				position={[-6.326, 2, 4.897]}
			/>
			<group position={[0, 0.541, 0]} rotation={[-0.119, 0, 0]} scale={1.394}>
				<mesh
					geometry={nodes.Cube020_primitive0.geometry}
					material={materials['05_Shuttle I Template']}
				/>
				<mesh
					geometry={nodes.Cube020_primitive1.geometry}
					material={materials['08_Shuttle I Template']}
				/>
			</group>
			<group position={[0, 0.541, 0]} rotation={[-0.119, 0, 0]} scale={1.394}>
				<mesh
					geometry={nodes.Cube004_primitive0.geometry}
					material={materials['02_Shuttle I Template']}
				/>
				<mesh
					geometry={nodes.Cube004_primitive1.geometry}
					material={materials['06_Shuttle I Template']}
				/>
				<mesh
					geometry={nodes.Cube004_primitive2.geometry}
					material={materials['08_Shuttle I Template']}
				/>
			</group>
			<group position={[0, 0.506, 0]} rotation={[-0.119, 0, 0]} scale={1.375}>
				<mesh
					geometry={nodes.Cube007_primitive0.geometry}
					material={materials['05_Shuttle I Template']}
				/>
				<mesh
					geometry={nodes.Cube007_primitive1.geometry}
					material={materials['02_Shuttle I Template']}
				/>
			</group>
			<mesh
				geometry={nodes.Cylinder018.geometry}
				material={materials['09_Shuttle I Template']}
				position={[0, 0.183, 0.864]}
				rotation={[1.603, 0, 0]}
				scale={1.305}
			/>
			<mesh
				geometry={nodes.Cube006.geometry}
				material={materials['07_Shuttle I Template']}
				position={[0, -0.713, -0.008]}
				rotation={[0.006, 0.002, -0.336]}
				scale={[0.123, 0.163, 0.05]}
			/>
			<mesh
				geometry={nodes.Cube005.geometry}
				material={materials['09_Shuttle I Template']}
				position={[0, -0.713, -0.008]}
				rotation={[-0.119, 0, 0]}
				scale={[0.123, 0.163, 0.05]}
			/>
			<mesh
				geometry={nodes.Cube001.geometry}
				material={materials['07_Shuttle I Template']}
				position={[0, -0.713, -0.008]}
				rotation={[1.911, 1.564, -2.247]}
				scale={[0.123, 0.163, 0.05]}
			/>
			<mesh
				geometry={nodes.Cube002.geometry}
				material={materials['09_Shuttle I Template']}
				position={[0, -0.713, -0.008]}
				rotation={[-Math.PI / 2, 1.452, Math.PI / 2]}
				scale={[0.123, 0.163, 0.05]}
			/>
			<mesh
				geometry={nodes.Cube003.geometry}
				material={materials['07_Shuttle I Template']}
				position={[0, -0.713, -0.008]}
				rotation={[1.231, -1.564, 0.895]}
				scale={[0.123, 0.163, 0.05]}
			/>
			<mesh
				geometry={nodes.BezierCircle.geometry}
				material={materials['05_Shuttle I Template']}
				position={[0, 0.183, 0.839]}
				rotation={[Math.PI / 2, 0, 0]}
				scale={0.289}
			/>
		</group>
	)
}

useGLTF.preload('/rocket.glb')

export default Rocket
