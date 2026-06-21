// @ts-ignore
import Snow from './assets/snojito_b.svg?react'
// import MyIcon from './assets/icon.svg?react'

import './App.css'

function App() {

  return (
    <>
        <div className="hero">
          <Snow />
          <div className='h-c'>

          <h1           >
            <span className='n-1'>Dear Emma</span>
          </h1>
          <h1           >
            <span>Get well</span>
          </h1>
          <h1>
            
            <span className='n1'>so</span> <span className='n1'>fucking</span> <span className='n1'>soon</span>
          </h1>
          </div>
          <button 
            style={{
              position:'absolute',bottom:0,right:0
            }}
          onClick={()=>location.reload()}>🔄 Refresh</button>
        </div>

   
    </>
  )
}

export default App
