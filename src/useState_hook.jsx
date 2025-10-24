import {useState, useEffect,useRef} from "react";

export default function UseState() {
    ////////hisoblaw/////////////
    const [cout, setCout] = useState(10);
    ////////////Kornadgan qlw//////////////
    const [visible, setIsVisible] = useState(false);
//////////text  areda yozilganni kornadgan qlw///////////
    const [text, setText] = useState("");
    //////Чекбокс или переключатель (switch)/////
    const [isOn, setIsOn] = useState(false);
    ////////To do list///////
    const [tasks, setTasks] = useState([]);
    const addTasks = () => {
        setTasks([...tasks, `Задача: ${tasks.length + 1}`]);
    }
///////Zagruzkani imitatsiya qlw//////
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
    }, []);
    ///// Управлять видео или аудио состоянием////
    const [isPlaying,setIsPlaying]=useState(false);
    const videoRef=useRef(null);
    const togglePlay=()=>{

            const video=videoRef.current;
            if(!video) return "video topilmadi!";
            if(isPlaying){
                video.pause();
            }else{
                video.play()
            }
        setIsPlaying(!isPlaying);
    }
    return (
        <div className="flex gap-20 flex-col">
            {/*hisob +1 ,-1*/}
            <div className="text-xl flex gap-10">
                <h1>Cout: {cout}</h1>
                <button onClick={() => setCout(cout + 1)}>+1</button>
                <button onClick={() => setCout(cout - 1)}>-1</button>
                <button onClick={() => setCout(0)}>Restart</button>
            </div>
            {/*////////////////////////////////////////////*/}
            {/*        kornadgan skrit qlw */}
            <div>
                <button onClick={() => setIsVisible(!visible)}>   {visible ? "Skrit" : "Pokazat"} Tekst</button>
                {visible && <p>Man keldm</p>}

            </div>
            {/*////////////////////////////*/}
            {/*text areda yozilganni kornadgan qlw*/}

            <div>
                <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Напиши че то..."/>
                <p>Ты написал: {text}</p>
            </div>
            {/*//////////////////////////////*/}

            {/*Чекбокс или переключатель (switch)*/}
            <input type="checkbox" checked={setIsOn} onChange={() => setIsOn(!isOn)}/>
            {isOn ? "ON" : "OFF"}
            {/*////////////////////////////////*/}

            {/*   To do list*/}
            <div>
                <button onClick={addTasks}>
                    Добавить задачу
                    <ul>{tasks.map((t, i) => (
                        <li key={i}>{t}</li>
                    ))}</ul>
                </button>
            </div>
            {/*///////////////////////////*/}

            {/*Zagruzkani imitatsiya qlw*/}
            <p>{loading ? "Zagruzka...." : "Gotovo"}</p>
            {/*///////////////////////*/}

            {/*Управлять видео или аудио состоянием*/}
<div className="flex flex-col items-center mt-12 gap-">
    <video
        ref={videoRef}
        width='620'
        controls={false}
        className="rounded-2xl "
        src="https://share.google/wxH7EeaW4HM2Bm0Al"/>
    <button onClick={togglePlay} className="bg-gray-400 via-slate-950 px-6 py-2 rounded-2xl ">{isPlaying? "⏸ Пауза" : "▶️ Играть"}</button>
</div>
        </div>

    )
}

