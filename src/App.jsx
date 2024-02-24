// import { useState } from 'react'
import Planets from './components/PlanetsList'
function App() {

  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center"> Aquera Assignment 
        <br className="max-md:hidden"/> {/* hide on mobile */}
        <span className="orange_gradient text-center">Planet Lists</span>
      </h1>

      <Planets />
      <p className="text-center desc underline m-5">
        by Hariharan A 
      </p>
    </section>
  )
}

export default App
