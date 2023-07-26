import './Cart.css';

const Cart = ({state}) => {
    return <div className='cart'>
        Shopping Cart
        <div className='number'>
            {state}
        </div>
    </div>
}

export default Cart;