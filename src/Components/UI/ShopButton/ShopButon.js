import './shopButton.css';

const ShopButton = ({onClick, state}) => {
    return <button className='shop-button'
    onClick={onClick}>
        Add to cart {state}
    </button>
}

export default ShopButton;