import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState("olive")

  return (
    <>
    <div className='h-80 w-full mb-6 ' 
     style={{backgroundColor: color}}
    >

    </div>
     <button className='bg-red-600 ml-5 text-white'
     onClick={() => setcolor("red")}> red </button>

     <button onClick={() => setcolor("green")}
      className='bg-green-600 ml-5 text-white'>green</button>

     <button onClick={() => setcolor("purple")} 
     className='bg-purple-600 ml-5 text-white'>purple</button>

     <button onClick={() => setcolor("yellow")} 
     className='bg-yellow-600 ml-5 text-white'>yellow</button>

     <button onClick={() => setcolor("gray")} 
     className='bg-gray-500 ml-5 text-white'> gray</button>

     <button onClick={() => setcolor("blue")} 
     className='bg-blue-600 ml-5 text-white'>blue</button>

     <button onClick={() => setcolor("pink")} 
     className='bg-pink-300 ml-5'>pink</button>

  
    </>
  )
}

export default App
