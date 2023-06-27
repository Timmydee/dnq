import React from 'react'
import Image from 'next/image'

'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}

// const Error = () => {
//   return (
//     <div>
//         <Image src='/errordnq.png' fill />
//     </div>
//   )
// }

// export default Error