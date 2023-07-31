import './home.css';
import PresentationCardContainer from '../../PresentationCardContainer/PresentationCardContainer';
import LeftSection from './LetfSection/LeftSection';
import RightSection from './RightSection/RightSection';
import SecondPart from './SecondPart/SecondPart';
import { useState } from 'react';

const Home = () => {


    const [users, setUsers] = useState([]);

    /* const addUser = user => setUsers([//replace state with new array
        ...users, //copy old array
        user //add new object at the end
    ]) */
    
    /* console.log(obj[0]) */

    const [userList, setUserList] = useState([]);

    const deleteUser = (id) => {
        const updatedList = userList.filter(x => x.id !== id);
        setUserList(updatedList);
    };

    const updateUserList = object => setUserList([...userList, object]);

    const changeUserList = (e, id, newName, newComment) => {
        e.preventDefault();
        console.log('Enviar clickeado')
        const newList = [...userList];
        newList.forEach(element => {
            if (element.id === id) {
                element.name = newName;
                element.comment = newComment;

                console.log('Nuevo nombre: '+ newName);
                console.log('Nuevo comentario: '+ newComment);
                setUserList(newList);
            }
        });
    };

    return <div className="home">
        <div className='first-part'>
            <LeftSection />
            <PresentationCardContainer />
            <RightSection updateUserList={updateUserList} userList={userList} />
        </ div>
        <div className='second-part'>
            <SecondPart userList={userList} deleteUser={deleteUser} changeUserList={changeUserList}/>
        </div>
    </div>
}

export default Home;

//replace todo lo que no sea numero por blanco
//update modal
// error key
//limpiar campos--