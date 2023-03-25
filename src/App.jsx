import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ApiLoad from './components/NextComponents/ApiLoad'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <button className="btn">Button</button>
      <button className="btn btn-primary">Button</button>
      <button className="btn btn-secondary">Button</button>
      <button className="btn btn-accent">Button</button>
      <button className="btn btn-ghost">Button</button>
      <button className="btn btn-link">Button</button>
      <ApiLoad />
    </div>
  )
}

export default App
