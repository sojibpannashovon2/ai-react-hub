import { useEffect, useState } from 'react'

import './App.css'
import ApiLoad from './components/NextComponents/ApiLoad'

function App() {
  const [load, setLoad] = useState([])
  useEffect(() => {

    const DataLoad = async () => {
      const url = `https://openapi.programming-hero.com/api/ai/tools`
      const res = await fetch(url);
      const value = await res.json();
      console.log(value.data.tools);
      setLoad(value);
    }
    DataLoad();

  }, [])


  return (
    <>
      <div>
        <h1 className='text-4xl font-bold my-4'>Ai_Hub_React</h1>
      </div>
    </>
  )
}

export default App
