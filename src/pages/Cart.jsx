import React, { useContext, useState } from "react"
import { Consumer } from '../context/Context'
import CartItem from '../components/CartItems'

function Cart() {
    //////////
    const [isLoading, setILoading] = useState(false)
    const { cartItems, setCartItems } = useContext(Consumer)

    //////////
    const price = '5.99'
    const pictures = cartItems.map(item => <CartItem key={item.id} item={item} price={price}></CartItem>)
    const total = price * pictures.length
    const totalDisplay = total.toLocaleString("en-US", { style: "currency", currency: "USD" })
    const order = isLoading ? 'Ordering...' : 'Place Order'
    ////////
    function handleOrder() {
        setILoading(true)
        setTimeout(func, 3000)
        function func() {
            setILoading(false)
            setCartItems([])
            console.log('You Order successfully placed')
        }
    }
    ////////////
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {pictures}
            <p className="total-cost">Total:{totalDisplay} </p>
            {
                cartItems.length > 0 ?
                <div className="order-button">
                    <button disabled={!cartItems.length} onClick={handleOrder}>{order}</button>
                </div> : <h1 style={{opacity:'0.5'}}>Cart is Empty</h1>
            }

        </main>
    )
}

export default Cart