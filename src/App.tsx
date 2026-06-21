import { useState } from 'react'
import Snow from './assets/snojito_b.svg?react'
// import MyIcon from './assets/icon.svg?react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <Snow />
        </div>
      </section>

   
    </>
  )
}

export default App
