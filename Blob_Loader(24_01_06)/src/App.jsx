import React from 'react'
import { GlobalStyle, Wrap } from './styles'

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <Wrap>
        <div className="loader" />
      </Wrap>
    </>
    
  )
}

export default App