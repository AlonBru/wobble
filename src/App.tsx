// @ts-ignore
import Snow from './assets/snojito_b.svg?react'
// import MyIcon from './assets/icon.svg?react'

import './App.css'

function App() {
function lightenHex(hex:string, percent:number = 30) {
  // Remove #
  hex = hex.replace(/^#/, '');

  // Expand shorthand form (#abc -> #aabbcc)
  if (hex.length === 3) {
    hex = hex.split('').map(c => c + c).join('');
  }

  const num = parseInt(hex, 16);

  let r = (num >> 16) & 255;
  let g = (num >> 8) & 255;
  let b = num & 255;

  r = Math.round(r + (255 - r) * (percent / 100));
  g = Math.round(g + (255 - g) * (percent / 100));
  b = Math.round(b + (255 - b) * (percent / 100));

  return (
    '#' +
    [r, g, b]
      .map(v => v.toString(16).padStart(2, '0'))
      .join('')
  );
}
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
          <button 
            style={{
              position:'absolute',bottom:50,right:10,    display: 'flex',
    alignItems: 'center'
            }}
          >HAT  <input type='color' onChange={(e)=>{
            const elementById = document.getElementById('path4');
            const elementById1 = document.getElementById('path8');
            
            if(elementById&&elementById1){
            const value = e.target.value;
            console.log(value)
              elementById.style.fill=value
              elementById1.style.fill=lightenHex(value)
          }
          }}/></button>
        </div>

   
    </>
  )
}

export default App
