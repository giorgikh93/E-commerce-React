import React, { useContext, useState } from "react"
import { Consumer } from '../context/Context'
import useHover from '../hooks/Usehover'

function CartItem({ item, price }) {
    ////
    const {hover,enter,leave} = useHover(false)
    const { removeFromCart } = useContext(Consumer)
    /////
    const className = hover ? "fa fa-trash" : "fa fa-trash-o"

    return (
        <div className='cart-item'>
            <i className={`${className} ri-delete-bin-line`} aria-hidden="true" onClick={() => removeFromCart(item)} onMouseEnter={enter} onMouseLeave={leave}></i>
            <img src={item.url} width="130px" />
            <p>{price}</p>
        </div>
    )
}
export default CartItem