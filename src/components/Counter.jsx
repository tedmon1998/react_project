import React, { useState } from 'react'


const Counter = () => {
   let [count, setCount] = useState(0)

   function increment() {
      setCount(count + 1)
   }
   function decrement() {
      setCount(count - 1)
   }

   return (
      <div>
         <b>{count}</b> <br />
         <button onClick={decrement}>Decrement</button>
         <button onClick={increment}>Increment</button>
      </div>
   )
}

export default Counter