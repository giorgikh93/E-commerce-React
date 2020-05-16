import React, { useState, useContext } from "react"
import { Consumer } from '../context/Context'
import PropTypes from 'prop-types'
import UseHover from '../hooks/Usehover'

function Image({ className, img }) {
    const{hover,enter,leave} = UseHover(false)

    const {
        toggleFavorite,
        addFavoriteItem,
        cartItems,
        removeFromCart
    } = useContext(Consumer)


    const heartIcon = hover && <i className="fa fa-heart-o favorite" aria-hidden="true" onClick={() => toggleFavorite(img.id)}></i>
    const heartFull = <i className="fa fa-heart ri-heart-fill favorite" aria-hidden="true" onClick={() => toggleFavorite(img.id)}></i>
    const plusIcon = hover && <i className="fa fa-plus-circle ri-add-circle-line cart" aria-hidden="true" onClick={() => addFavoriteItem(img)} ></i>
    const alreadyInCard = <i className="fa fa-shopping-cart ri-shopping-cart-fill cart" aria-hidden="true" onClick={() => removeFromCart(img)}></i>


    // function handleMouseEnter() {
    //     setHover(true)
    // }
    // function handleMouseLeave() {
    //     setHover(false)
    // }

    function cartItem() {
        const added = cartItems.some(item => item.id === img.id)
        if (added) {
            return alreadyInCard
        } else {
            return plusIcon
        }
    }

    return (
        <div onMouseEnter={enter} onMouseLeave={leave} className={`${className} image-container`}>
            <img src={img.url} className="image-grid" alt='image' />
            {img.isFavorite ? heartFull : heartIcon}
            {cartItem()}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}
export default Image
