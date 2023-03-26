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

      <h1 className='text-4xl font-bold my-4 text-black'>Ai_Hub_React</h1>
      <Button>Sort-By-Date</Button>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5'>  {
        load.map(singleData => <SingleData key={singleData.id} singleData={singleData}></SingleData>)
      }
      </div>
      <Button>Show-All</Button>

    </>
  )
}

export default App
