import './rightSection.css';
import { useState } from 'react';

const RightSection = ({updateUserList, userList}) => {

    const [details, setDetails] = useState({
        id: 0,
        name: '',
        comment: '',
    })

//    const [userList, setUserList] = useState([]);

    /* const handleSubmit = (data, event) => {
        event.preventDefault();
        addUser(data);
    } */

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUserList(details);
        setDetails({
            id: '',
            name: '',
            comment: ''
        })
        /* setUserList([...userList, details]); */
    }

    const logsObject = () => {
        console.log(details)
    }

    const logsObjectList = () => {
        console.log(userList);
    }

//                      event
/*     const handleObjectChange = (e) => {
        //object destructuring
        const name = e.target.name;
        const value = e.target.value;

        if (name === 'id') {
            const modifiedId = value.replace(/[^0-9]/g,'');
            setDetails((prevState) => ({...prevState, [name]: modifiedId}));
        }else{
            console.log(name, value)
        setDetails((prevState) => {
            return { ...prevState, [name]: value }
        })
        }
    }
 */

    const handleObjectChange = () => {
        
    }

    /* const handleChange = (e) => {
        const {name, value} = e.target;
        setDetails((prev) => {
            return {...prev, [name]: value};
        })
    } */

    console.log(details);

    return <div className='right-section'>

        <form onSubmit={handleSubmit} className='user-form' name='form'>

            <div className='form-group'>
                <label className='user-label'>Id</label>
                <input className='user-input' value={details.id} type='text' spellCheck='false' name='id' onChange={handleObjectChange}></input>
            </div>

            <div className='form-group'>
                <label className='user-label'>Nombre de Usuario</label>
                <input className='user-input' value={details.name} type='text' spellCheck='false' name='name' onChange={handleObjectChange}></input>
            </div>

            <div className='form-group'>
                <label className='user-label'>Comentario</label>
                <input className='user-input' value={details.comment} type='text' spellCheck='false' name='comment' onChange={handleObjectChange}></input>
            </div>

            <input type='submit' className='user-submit' name='submit'></input>

        </form>
        <button onClick={logsObject}>show object</button>
        <button onClick={logsObjectList}>show object list</button>
    </div>
}

export default RightSection;