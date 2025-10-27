import { useState, useMemo } from "react";
function FibanocciMisoli() {
  const [number, setNumber] = useState(0);

  function fibanocci(num) {
    if (num <= 1) return num;
    return fibanocci(num - 1) + fibanocci(num - 2);
  }
  const fValue = useMemo(() => {
    return fibanocci(number);
  }, [number]);
  return (
    <div className="flex flex-col  items-center align-center justify-center">
      <h1 className="text-2xl ">Hisoblaw</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        className="border rounded-2xl p-2"
        placeholder="Son kirit"
      />
      <p className="text-2xl">Itog:{fValue}</p>
    </div>
  );
}
export default FibanocciMisoli;
