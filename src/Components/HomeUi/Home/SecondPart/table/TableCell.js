import './tableCell.css';

const TableCell = ({id, name, comment, deleteUser}) => {

    return <div className='table-cell'>
        <div>{id}</div>
        <div>{name}</div>
        <div>{comment}</div>
        <button className='delete' onClick={() => deleteUser(id)}>Eliminar</button>
    </div>
}

export default TableCell;