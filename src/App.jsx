
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Component/DaisyNav/DaisyNav'
import Navbar from './Component/Navbar/Navbar'
import PricingOptions from './Component/PricingOptions/PricingOptions'

const pricingPromise = fetch('pricingData.json').then(res => res.json());

function App() {
 

  return (
    <>

    
      
      <header>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>

      </main>
    
    </>
  )
}

export default App
