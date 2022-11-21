import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className="wrapper">
        <h1 style={{ fontSize: '3rem', fontWeight: '500', marginBottom: '20px' }}>Home</h1>

        {/* Cards */}
        <div class="card text-white bg-dark" style={{zIndex: '-1'}}>
          <div class="card-header">
            7Timer! API
          </div>
          <div class="card-body">
            <h5 class="card-title">Introduction</h5>
            <p class="card-text">7Timer! is a series of web-based meteorological forecast products, mainly derived from the NOAA/NCEP-based numeric weather model, the Global Forecast System (GFS).<br /> 7Timer! was firstly established in July 2005 as an exploration product under supported of the National Astronomical Observatories of China and had been largely renovated in 2008 and 2011. Currently it is supported by the Shanghai Astronomical Observatory of Chinese Academy of Sciences.</p>
          </div>
        </div>
        <br />

        <div class="card text-white bg-dark" style={{zIndex: '-1'}}>
          <div class="card-header">
          Place Holder API
          </div>
          <div class="card-body">
            <h5 class="card-title">Introduction</h5>
            <p class="card-text">JSONPlaceholder is a free online REST API that you can use whenever you need some fake data. It can be in a README on GitHub, for a demo on CodeSandbox, in code examples on Stack Overflow, ...or simply to test things locally.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home
