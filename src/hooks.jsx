// export default function  Hooks() {
//useState praktika
// let [count,setCount]=React.useState('Jas')
// function changeCount(){
//   // setCount(count+5)
//     setCount((prev)=> prev+'87')
// }

//---------------------------------------------

// useEffect praktika

// React.useEffect(()=>{
//     console.log('kirib keldi');
// },[])

//
//     return(
//         <>
//             {/*useState praktika*/}
//             {/* <button  onClick={changeCount} className="bg-gray-400 w-20 px-2 py-2"> + </button>*/}
//    {/*<p className="text-2xl"> {count}</p>*/}
//    {/*         ------------------------------------*/}
//
//              {/*useEffect praktika*/}
//
//
//         </>
//     )
// }

// useReduced praktika

// import { useReducer } from "react";
// const minus = (payload) => ({ type: "minus", payload });
// const plus = (payload) => ({ type: "plus", payload });

// function reducer(state, action) {
//   switch (action.type) {
//     case "plus":
//       return {
//         counter: state.counter + 100,
//       };
//     case "minus":
//       return {
//         counter: state.counter - 100,
//       };
//     case "plus+2":
//       return {
//         counter: state.counter + 200,
//       };
//     case "plus-2":
//       return {
//         counter: state.counter - 200,
//       };
//   }
// }
// export default function App2() {
//   const [state, dispatch] = useReducer(reducer, {
//     counter: 1,
//   });

//   return (
//     <>
//       <button onClick={() => dispatch(plus(100))}>+100</button>
//       <button onClick={() => dispatch(minus(100))}>-100</button>
//       <h1>{state.counter}</h1>
//       <button onClick={() => dispatch({ type: "plus+2", payload: 200 })}>
//         +200
//       </button>
//       <button onClick={() => dispatch({ type: "plus-2", payload: 200 })}>
//         -200
//       </button>
//     </>
//   );
// }
// ----------------------------------------------------------------------------
