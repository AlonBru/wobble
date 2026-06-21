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
            <span className='n-1'>Darling Emma,</span>
          </h1>
          <h1           >
            <span>Get well</span>
          </h1>
          <h1 style={{translate:'-10vw'}}>
            
            <span className='n1'>ever so</span> 
          </h1>
          <h1 style={{translate:'-20vw'}}>
            
            <span className='n2'>fucking</span> 
          </h1>
            
          <h1 style={{translate:'-18vw'}}>
            <span className='n3'>soon</span>
          </h1>
          </div>
          <button 
            style={{
              position:'absolute',bottom:10,right:10
            }}
          onClick={()=>location.reload()}>GO AGAIN</button>
        </div>

   
    </>
  )
}

export default App
