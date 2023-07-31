import './tableCell.css';
import Modal from '../../../../UI/Modal/Modal';
import { useState } from 'react';

const TableCell = ({id, name, comment, deleteUser, changeUserList}) => {

    const [isOpen, setIsOpen] = useState(false);

    const close = () => setIsOpen(false);

    return <div className='table-cell'>
        <div className='cell-info'>
            <div className='cell'>{id}</div>
            <div className='cell'>{name}</div>
            <div className='cell'>{comment}</div>
        </div>
        <div className='cell-buttons'>
            <button className='delete' onClick={() => deleteUser(id)}>Eliminar</button>
            <button className='update' onClick={() => setIsOpen(true)}>update</button>
            <Modal isOpen={isOpen} close={close} id={id} name={name} comment={comment} changeUserList={changeUserList}/>
        </div>
    </div>
}

export default TableCell;