import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div className="bg-white p-4 rounded shadow-md mt-4">
      <h2 className="text-xl">Counter</h2>
      <p>Count: {count}</p>
      <button
        onClick={increment}
        className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
