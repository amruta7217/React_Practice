import { useState, useCallback, useEffect, useRef } from 'react'

function App() {

  const [length, setLength] = useState(8)
  const [numberAllow, setNumberAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrtsuvwxyz"

    if(numberAllow) str += "0123456789"
    if(charAllow) str += "!@#$%^&*()~`{}[]+="

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)    
    }

    setPassword(pass)

  }, [length, numberAllow, charAllow, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,5)  // you can define range also to copy
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllow, charAllow, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-center text-white my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type="text" 
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref = {passwordRef}
          />
          <button 
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' 
            onClick={copyPasswordToClipboard}>
              copy
          </button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              className='cursor-pointer'
              type="range" 
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length :  {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
              <input 
                type="checkbox" 
                defaultChecked={numberAllow}
                value={numberAllow}
                onChange={() => {
                  setNumberAllow((prev) => !prev)
                }}
              />
              <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
              <input 
                type="checkbox" 
                defaultChecked={charAllow}
                value={charAllow}
                onChange={() => {
                  setCharAllow((prev) => !prev)
                }}
              />
              <label>Characters</label>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
