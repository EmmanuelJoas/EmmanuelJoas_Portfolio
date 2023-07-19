
//import the react components 
import{
   Suspense
  ,useEffect
  ,useState
} from 'react';

//Import the canvas three js 
import { Canvas } from '@react-three/fiber';

//import the tree js components 
import { 
   OrbitControls
  ,Preload
  ,useGLTF 
} from '@react-three/drei';

//Import the canvas to loaded in the page 
import CanvasLoader from '../Loader';


const Computer = ({isMobile}) => {
  //const computer = useGLTF('./desktop_pc/scene.gltf');
  const computer = useGLTF('./The room/scene.gltf')
  return (
    <mesh>
      <hemisphereLight 
            intensity={0.15}
            groundColor="black"
      />

      <pointLight intensity={1}/>

      <spotLight

        position={[-20,50,10]}
        angle={0}
        penumbra={1}
        intensity={1}
        castShadow

      />

      <primitive

      object={computer.scene} 
      scale={isMobile ? 0.02:0.03}
      position={isMobile ?[0,-3,-2.2] :[-2.5,-4,-1.5]}
      rotation={[0,0,0]}
      
      />
    </mesh> 
  )
};

//reference to the canvas load in the scene 
const ComputerCanvas = () =>{
  //state use to check if the web page is a mobile scale
  const[isMobile,setIsMobile] = useState(false);
  useEffect(()=>{
    //Add a listener for changes to the scree
    const mediaQuery = window.matchMedia("(max-width:500px)");
    //set the initial value of the 'isMobile' state variable
    setIsMobile(matchMedia.matches);
    //define a callback function to handle changes to the media query
    const handlerMediaQueryChange =(event)=>{
      setIsMobile(event.matches);
    }
    //Add the callback function as a listener for changes to the media query 
    mediaQuery.addEventListener('change',handlerMediaQueryChange);
    return()=>{
      mediaQuery.removeEventListener('change',handlerMediaQueryChange);
    }
  },[])
  return(
    <Canvas
    frameloop="demand"
    shadows
    camera={{ position:[20,3,5], fov:25 }}
    gl={{preserveDrawingBuffer:true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
        enableZoom={false}
        maxPolarAngle={Math.PI/2}
        minPolarAngle={Math.PI/2}
      />
      <Computer isMobile={isMobile}/>
      <Preload all/>
      </Suspense>

   
    </Canvas>
  )
}

export default ComputerCanvas;
