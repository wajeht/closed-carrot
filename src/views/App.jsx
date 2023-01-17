import { useState } from 'react';
import Users from './components/Users';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-3 bg-neutral-200">
      <p>Edit src/App.jsx and save to test HMR</p>
      <div className="bg-neutral-50 p-5 rounded-md">
        <img src="./assets/mariposa.jpeg" className="logo" alt="mariposa logo" />
        <h1 className="text-3xl font-bold">Mariposa Tech Hub</h1>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>

      <p>Edit src/components/Users.jsx and save to test HMR</p>
      <Users />
    </div>
  );
}
