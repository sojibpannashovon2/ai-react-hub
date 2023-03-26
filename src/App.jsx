import { data } from 'autoprefixer'
import { useEffect, useState } from 'react'

import './App.css'

import Button from './components/NextComponents/Button'
import Modal from './components/NextComponents/Modal'
import SingleData from './components/NextComponents/SingleData'

function App() {
  const [load, setLoad] = useState([])
  const [seeMore, setSeeMore] = useState(false);
  const [uniqueId, setUniqueId] = useState(null);
  const [modalData, setModalData] = useState({})
  // console.log(modalData);
  // console.log(uniqueId);
  ///This is for show-all button
  const handleButton = () => {
    setSeeMore(true);
  }

  //This is useEffect for CARD data
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

  //This useEffect for Modal data load

  useEffect(() => {
    const url2 = ` https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`
    fetch(url2)
      .then(res => res.json())
      .then(item => setModalData(item.data))
  }, [uniqueId])


  // console.log(load);
  return (
    <>

      <h1 className='text-4xl font-bold my-4 text-black'>Ai_Hub_React</h1>
      <Button>Sort-By-Date</Button>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5'>  {
        load.slice(0, seeMore ? 12 : 6).map(singleData => <SingleData singleData={singleData} setUniqueId={setUniqueId} key={singleData.id}></SingleData>)
      }
      </div>
      {
        !seeMore &&
        <span onClick={handleButton}>
          <Button>Show-All</Button>
        </span>
      }
      <Modal modalData={modalData} />


    </>
  )
}

export default App
