import { useAtom } from "jotai";
import { countAtom } from "../store/atoms";

const AtomTesting = () => {
  const [count, setCount] = useAtom(countAtom); 
 return (
    <div>
      <h1>Jotai Counter</h1>

      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
  
}

export default AtomTesting;
