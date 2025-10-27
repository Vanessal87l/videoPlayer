// import { BrowserRouter } from "react-router-dom";
// import Hooks from "@/hooks.jsx";
// import UseState from "@/useState_hook.jsx";
// import VideoPlayer from "./videoPlayer";
import FibanocciMisoli from "./useMemo";
// import Parent from "./useMemo";

function App() {
  // const [son,setSon]=useState(0);
  // const [matn,setMatn]=useState("");
  // const hisob=useMemo(()=>{
  //     console.log("Hioblanvotti...");
  //     return son*10850;
  // },[son]);

  return (
    <>
      {/* <UseState /> */}
      {/* <Hooks /> */}
      {/* <Parent /> */}
        <FibanocciMisoli />
      {/* <VideoPlayer /> */}
      {/*<h2>Natija:{hisob}</h2>*/}
      {/*      <button onClick={()=>setSon(son+1)}>*/}
      {/*          +1*/}
      {/*      </button>*/}
      {/*          <input value={matn} onChange={(e)=>setMatn(e.target.value)} />*/}
    </>
  );
}

export default App;
