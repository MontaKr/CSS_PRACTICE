import React from 'react'
import { GlobalStyle, Wrap } from './styles'

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <Wrap>
        <div className="loader"></div>
      </Wrap>
    </>
    
  )
}

export default App