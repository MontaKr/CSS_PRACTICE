import { Wrap, AnimatedSpan } from './style'

function App() {

  const arrayData = ["Youtuber.", "Coders.", "Designers.", "Creative."]

  return (
    <Wrap>I'm
      {
        arrayData.map((value, index)=>{
          return (
            <AnimatedSpan key={index} index={index} dataText={value}>{value}</AnimatedSpan>
          )
        })
      }
    </Wrap>
  )
}

export default App