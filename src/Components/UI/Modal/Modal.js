import React from 'react'
import './modal.css'

export default function Modal({ info, isOpen, close }) {

    /* const MODAL_STYLES = {
        height: '60%',
        width: '30%',
        color: 'black',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#FFF',
        Padding: '50px',
        zIndex: 1000 
    } */

    const OVERLAY_STYLES = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 1000
    }

    if (isOpen !== true ) return null;
  return (
    <>
    <div style={OVERLAY_STYLES} />
    <div className='modal'>
        <div className='modal-header'>
            Modificar
            <button className='modal-close' onClick={() => close()}>Cerrrar</button>
        </div>
        <form className='modal-form'>
            <input className='modal-input disabled' value={'123'} type='text' spellCheck='false' readOnly='true'></input>
            <input className='modal-input' type='text' spellCheck='false'></input>
            <input className='modal-input' type='text' spellCheck='false'></input>
            <input className='modal-send' type='submit' value={'ENVIAR'} />
        </form>
      {info}
    </div>
    </>
  )
}
