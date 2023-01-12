import { Canvas } from "@react-three/fiber";
import { MeshWobbleMaterial } from "@react-three/drei";

export const WobblyBox = () => {
	return (
		<Canvas
			className="absolute inset-0 w-full h-full bg-zinc-900"
			camera={{ position: [0, 3, 3] }}
		>
			<mesh>
				<boxGeometry args={[1, 2, 1, 12, 12]} />
				<MeshWobbleMaterial speed={3} />
			</mesh>

			{/* prettier-ignore  */}
			<pointLight
				position={[2, 2, 2]}
				intensity={1}
				color="hotpink"
			/>
		</Canvas>
	);
};
