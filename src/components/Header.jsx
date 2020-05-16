import React, { useContext } from "react"
import { Consumer } from '../context/Context'
import { Link } from 'react-router-dom'

function Header() {
    const { cartItems } = useContext(Consumer)
    console.log(cartItems)
    return (
        <header>
            <h2><Link to='/'>Pic Some</Link></h2>
            <Link to='/cart'>
                {cartItems.length > 0 ? <i className="fa fa-shopping-cart main" aria-hidden="true"></i> : <i className="fa fa-cart-plus" aria-hidden="true"></i>}

            </Link>
        </header>
    )
}

export default Header