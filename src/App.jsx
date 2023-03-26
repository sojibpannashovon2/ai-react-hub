import { data } from 'autoprefixer'
import { useEffect, useState } from 'react'

import './App.css'

import Button from './components/NextComponents/Button'
import SingleData from './components/NextComponents/SingleData'

function App() {
  const [load, setLoad] = useState([])
  useEffect(() => {

    const DataLoad = async () => {
      const url = `https://openapi.programming-hero.com/api/ai/tools`
      try {
        const res = await fetch(url);
        const value = await res.json();
        // console.log(value.data.tools);
        setLoad(value.data.tools);
      }
      catch (error) {
        console.log(error);
      }
    }
    DataLoad();

  }, [])

  // console.log(load);
  return (
    <>
      <div>
        <h1 className='text-4xl font-bold my-4 text-accent'>Ai_Hub_React</h1>
        <Button>Sort-By-Date</Button>

        {
          load.map(singleData => <SingleData key={singleData.id} singleData={singleData}></SingleData>)
        }

      </div>
    </>
  )
}

export default App
