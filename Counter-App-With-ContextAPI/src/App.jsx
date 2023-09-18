import { useEffect, useState } from 'react'
import Button from './Button'
import DisplayCount from './DisplayCount'
import { CountContextProvider } from './Context'

function App() {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    if(count === 0){
      document.querySelector('.decrement-button').style.display = "none"
    }
  },[])

  const handleCount = (type) => {
    const decrementButton = document.querySelector('.decrement-button')
    if(type === "increment") {
      setCount(count + 1)
      
      if(!decrementButton.style.display || 
        decrementButton.style.display === "none"){
          decrementButton.style.display = "inline-block"
        }
      
    }

    if(type === "decrement"){
      setCount(count - 1)
      if(count === 1){
        decrementButton.style.display = "none"
      }
    }

  }

  return (
   <CountContextProvider count={count} setCounter={handleCount}>
      <Button />
      <DisplayCount />
   </CountContextProvider>
  )
}

export default App
