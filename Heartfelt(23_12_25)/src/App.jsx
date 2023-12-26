import React from 'react'
import { GlobalStyle, Wrap } from './styles'

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <Wrap>
        <div className="container">
          <div className="preloader">
            <span/>
            <span/>
            <span/>
          </div>
          <div className="shadow"/>
        </div>
      </Wrap>
    </>
  )
}

export default App