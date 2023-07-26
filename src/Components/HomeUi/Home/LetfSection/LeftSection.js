import ExpoCard from './ExpoCard/ExpoCard';
import './leftSection.css';

const LeftSection = () => {

    const characters = [
        {id: 1, name: 'Tulio', lastName: 'Triviño', img: 'https://www.latercera.com/resizer/kiAdAiZzK3AogssG0LYFG3Ezn3w=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/7PVMUQ6D5JAXLIV7DRCNMCKP5E.jpg'},
        {id: 2, name: 'Juan-Carlos', lastName: 'Bodoque', img: 'https://static1.personality-database.com/profile_images/fcdc53abd4464da3b7321d4ed934f385.png'},
        {id: 3, name: 'juanin', lastName: 'Juan-Harry', img: 'https://quizizz.com/_media/questions/48a85c08-1463-4fb7-8ca6-6632fff580b0_90_90'},
    ]

    /* console.log(characters) */

    return <div className='left-section'>
        {characters.map((x) => <ExpoCard id={x.id} name={x.name} lastName={x.lastName} img={x.img}/>)}
    </div>
}

export default LeftSection;