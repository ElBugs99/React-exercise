import './expoCard.css';

const ExpoCard = ({id, name, lastName, img}) => {
    return <div className='expo-card'>
        <div className='card-content'>
            <div className='img-container'><img className='expo-img' src={img} alt='asdasdda'></img></div>
            <div className='card-info'>
                <div>{id}. {name}</div>
                <div>{lastName}</div>
            </div>
        </div>
    </div>
}

export default ExpoCard;