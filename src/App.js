import './App.css';
import React from 'react';
import { useNavigate } from 'react-router-dom'


function App() {
  const navigate = useNavigate();
  const name = "Ngoc"
  const age = "21"
  function handleClick(x) {
    navigate(`/about/${x}`);
  }
  return (
    <div className='App'>
      <h1>Hello</h1>
      <button onClick={() => handleClick(name)}>{name}</button>
      <button onClick={() => handleClick(age)}>{age}</button>
    </div>
  );
}
export default App;
