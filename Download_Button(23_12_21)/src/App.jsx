import React from 'react'
import { GlobalStyle, Wrap, StyledIcon } from './styles'
import { faAndroid, faApple, faWindows } from '@fortawesome/free-brands-svg-icons';


const App = () => {

  const buttons = [{icon : faAndroid,dfn : "Google Play"},{icon : faApple, dfn : "App Store"},{icon : faWindows, dfn : "Windows Store"}]

  return (
    <>
      <GlobalStyle/>
      <Wrap>
        <ul>
          {
            buttons.map((val)=>{
              return (
                <li>
                  <div className="download">
                    <StyledIcon icon={val.icon} size="3x" />
                    <div className="df">Donwload From</div>
                    <div className="dfn">{val.dfn}</div>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </Wrap>
    </>
  )
}

export default App