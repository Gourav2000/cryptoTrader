import { useState } from 'react'
import {Navbar, Welcome, Services, Transactions, Footer} from "./components"

const App = () => {
  return (
    <div className="App">
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Navbar />
          <Welcome />
        </div>
          <Services />
          <Transactions />
          <Footer />
      </div>
    </div>
  )
}

export default App;
