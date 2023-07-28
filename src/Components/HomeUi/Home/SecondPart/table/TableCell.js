import './tableCell.css';
import Modal from '../../../../UI/Modal/Modal';
import { useState } from 'react';

const TableCell = ({id, name, comment, deleteUser}) => {

    const [isOpen, setIsOpen] = useState(false);

    const close = () => setIsOpen(false);

    return <div className='table-cell'>
        <div>{id}</div>
        <div>{name}</div>
        <div>{comment}</div>
        <button className='delete' onClick={() => deleteUser(id)}>Eliminar</button>
        <button className='update' onClick={() => setIsOpen(true)}>update</button>
        <Modal isOpen={isOpen} close={close}/>
    </div>
}

export default TableCell;