
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Component/DaisyNav/DaisyNav'
import Navbar from './Component/Navbar/Navbar'
import PricingOptions from './Component/PricingOptions/PricingOptions'
import ResultCharts from './Component/resultsChart/ResultCharts'
import MarksChart from './Component/marksChart/MarksChart'
import axios from 'axios'



const pricingPromise = fetch('pricingData.json').then(res => res.json());

const marksPromise = axios.get('marksData.json');

function App() {
 

  return (
    <>

    
      
      <header>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main className='p-8'>
        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>

       <Suspense fallback={<span className='loading loading-spinner loading-lg'></span>}>
       <MarksChart marksPromise={marksPromise}></MarksChart>
       </Suspense>
          

        <ResultCharts></ResultCharts>

      </main>
    
    </>
  )
}

export default App
