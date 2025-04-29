import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const colors = ['#001f54', '#0d47a1', '#1976d2', '#49b6ff', '#add7f6'];
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <div className="app-container" style={{ backgroundColor: colors[index] }}>
      <button className="color-button" onClick={handleClick}>
        Change Color!
      </button>
    </div>
  );
}