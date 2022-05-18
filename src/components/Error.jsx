import React from 'react'

export const Error = ( { mensaje } ) => {
  return (
    <div>
        <p className="bg-red-600 text-white text-center p-3 uppercase font-bold mb-3 rounded">{mensaje}</p>
    </div>
  )
}
