import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

// function Changecolor (color){
//   setColor(color)
// }


  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>

    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button onClick={()=>setColor('red')} className='outline-none px-4 py-1 rounded-full text-black shadow-lg ' style={{backgroundColor:'red'}}>Red</button>
            <button onClick={()=>setColor('Green')} className='outline-none px-4 py-1 rounded-full text-black shadow-lg ' style={{backgroundColor:'green'}}>Green</button>
            <button onClick={()=>setColor('blue')}  className='outline-none px-4 py-1 rounded-full text-black shadow-lg ' style={{backgroundColor:'Blue'}}>Blue</button>
            <button onClick={()=>setColor('pink')}  className='outline-none px-4 py-1 rounded-full text-black shadow-lg ' style={{backgroundColor:'pink'}}>Pink</button>
            <button onClick={()=>setColor('yellow')}  className='outline-none px-4 py-1 rounded-full text-black shadow-lg ' style={{backgroundColor:'yellow'}}>Yellow</button>
            <button onClick={()=>setColor('brown')}  className='outline-none px-4 py-1 rounded-full text-black shadow-lg ' style={{backgroundColor:'brown'}}>Brown</button>
            
      </div>
    </div>



   </div>
  )
}

export default App
