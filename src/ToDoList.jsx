import { useReducer, useState } from "react";
const initialState = [{ id: 1, done: false }];

function reducer(state, action) {
  switch (action.type) {
    case "Qowiw":
      return [...state, { id: Date.now(), text: action.payload, done: false }];
    case "Ociriw":
      return [...state.filter((toDo) => toDo.id !== action.payload)];
    case "Toggle":
      return state.map((toDo) =>
        toDo.id === action.payload ? { ...toDo, done: !toDo.done } : toDo
      );
  }
}

export default function ToDoList() {
  const [toDos, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState("");
  const handleAdd = () => {
    if (text.trim() === "") return;
    dispatch({ type: "Qowiw", payload: text });
    setText("");
  };
  return (
    <div className="flex flex-col justify-center h-100vh items-center gap-4 align-center text-3xl">
      <h1>• To do list •</h1>
      <div className="flex flex-col justify-center h-100vh items-center gap-4 text-2xl">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="new to do"
        />
        <button onClick={handleAdd}>Qowiw</button>
      </div>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>
            <span
              onClick={() => dispatch({ type: "Toggle", payload: toDo.id })}
              className={`cursor-pointer text-xl ${
                toDo.done ? "line-through text-gray-400" : ""
              }`}
            >
              {" "}
              {toDo.text}
            </span>
            <button
              className="text-2xl"
              onClick={() => dispatch({ type: "Ociriw", payload: toDo.id })}
            >
              __♦Copiw{" "}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
