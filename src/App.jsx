/*
 * @Author: ryyyyy
 * @Date: 2023-01-30 16:58:35
 * @LastEditors: ryyyyy
 * @LastEditTime: 2023-01-31 15:36:27
 * @FilePath: /first-vite/src/App.jsx
 * @Description: 
 * 
 */
import { useState } from 'react'
import Hello from './demo/hello';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return <div>
    <img src={import.meta.env.BASE_URL+"vite.svg"} className="logo" alt="Vite logo" />
    <Hello />
    <p>count: {count}</p>
    <button onClick={() => setCount(prev => ++prev)}>add</button>
    <button onClick={() => setCount(prev => --prev)}>minuse</button>
  </div>

  // return (
  //   <div className="App">
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src="/vite.svg" className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://reactjs.org" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </div>
  // )
}

export default App
