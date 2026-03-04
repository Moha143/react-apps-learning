import useCounterStore from "../../store/counterStore";

function Counter() {
  const { count, increase, decrease } = useCounterStore();

  return (
    <div>
      <h1>Zustand Counter</h1>

      <h2>{count}</h2>

      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

export default Counter;