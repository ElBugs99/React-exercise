import React from 'react'

export default function Modal({ info, isOpen, close }) {
    if (isOpen !== true ) return null;
  return (
    <div>
        handleObjectChange
      {info}
      <button onClick={() => close()}>Cerrrar</button>
    </div>
  )
}
