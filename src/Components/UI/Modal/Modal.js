import React, { useState } from 'react'
import './modal.css'

export default function Modal({ info, isOpen, close , id, name, comment, changeUserList}) {

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

    const [nombre,setNombre] = useState(name);
    const [comentario, setComentario] = useState(comment);

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
            <label>ID:</label>
            <input className='modal-input disabled' value={id} type='text' spellCheck='false' readOnly='true'></input>
            <label>Nombre:</label>
            <input className='modal-input' onChange={(e) => setNombre(e.target.value)} value={nombre} type='text' spellCheck='false'></input>
            <label>comentario:</label>
            <input className='modal-input' value={comentario} onChange={(e) => setComentario(e.target.value)} type='text' spellCheck='false'></input>
            <input className='modal-send' onClick={(e) => changeUserList(e, id, nombre ,comentario)} type='submit' value={'ENVIAR'} />
        </form>
      {info}
    </div>
    </>
  )
}
