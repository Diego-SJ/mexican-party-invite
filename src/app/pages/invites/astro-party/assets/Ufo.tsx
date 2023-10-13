import { useGLTF, PerspectiveCamera } from '@react-three/drei'

const UFO = (props: any) => {
	const { nodes, materials }: any = useGLTF('/ufo.glb')
	return (
		<group {...props} dispose={null}>
			<PerspectiveCamera
				makeDefault={false}
				far={10000}
				near={1}
				fov={45.837}
				position={[7.709, 0.734, 2.833]}
			/>
			<mesh
				geometry={nodes.Cylinder.geometry}
				material={materials.M1}
				position={[0.178, -0.209, -0.07]}
				scale={[2.18, 1.775, 2.18]}
			/>
			<mesh
				geometry={nodes.Sphere.geometry}
				material={materials['M1.003']}
				position={[0.178, -0.078, -0.07]}
				scale={1.393}
			/>
			<mesh
				geometry={nodes.Torus.geometry}
				material={materials['M1.001']}
				position={[0.178, -0.067, -0.07]}
				scale={1.364}
			/>
			<mesh
				geometry={nodes.Cylinder001.geometry}
				material={materials['M1.002']}
				position={[0.178, -0.218, -0.07]}
				scale={[2.033, 1.64, 2.033]}
			/>
			<mesh
				geometry={nodes.Cube.geometry}
				material={materials['M1.001']}
				position={[0.178, 0.206, -0.022]}
				scale={1.043}
			/>
			<mesh
				geometry={nodes.Cube001.geometry}
				material={materials['M1.001']}
				position={[0.178, 0.206, -0.022]}
				rotation={[0, Math.PI / 2, 0]}
				scale={1.043}
			/>
			<mesh
				geometry={nodes.Cylinder002.geometry}
				material={materials['M1.002']}
				position={[0.178, -0.418, -0.07]}
				rotation={[1.121, 0, 0]}
				scale={0.199}
			/>
			<mesh
				geometry={nodes.Sphere003.geometry}
				material={materials.M1}
				position={[-0.86, 1.365, -0.192]}
				rotation={[0, 0, 0.242]}
				scale={0.099}
			/>
			<mesh
				geometry={nodes.Sphere001.geometry}
				material={materials.M1}
				position={[1.915, -1.283, 0.5]}
				rotation={[0, 0, 0.242]}
				scale={0.083}
			/>
			<mesh
				geometry={nodes.Cube002.geometry}
				material={materials['M1.005']}
				position={[-1.246, 0.677, -0.808]}
				rotation={[0, 0, -0.413]}
				scale={0.14}
			/>
			<mesh
				geometry={nodes.Cube003.geometry}
				material={materials['M1.005']}
				position={[-0.648, -0.488, 2.237]}
				rotation={[0, 0, -0.334]}
				scale={0.207}
			/>
			<mesh
				geometry={nodes.Cube004.geometry}
				material={materials['M1.005']}
				position={[1.146, 1.242, 1.251]}
				rotation={[0.033, -0.175, -0.34]}
				scale={0.211}
			/>
		</group>
	)
}

useGLTF.preload('/ufo.glb')

export default UFO
