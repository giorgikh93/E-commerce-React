import React, { useState, useEffect } from 'react'


const Context = React.createContext()


function ContextProvider(props) {
    /////state////
    const [photos, setPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

//////
    function toggleFavorite(id) {
        const updatedPhotos = photos.map(item => {
            if (id === item.id) {
                return {
                    ...item,
                    isFavorite: !item.isFavorite
                }
            }
            return item
        })
        setPhotos(updatedPhotos)

    }
//////
    function addFavoriteItem(img) {
        setCartItems(prevItems => [...prevItems, img])
    }
/////
    function removeFromCart(img) {
            if(img){
                setCartItems(prevItems=>prevItems.filter(item=>item.id !== img.id))
            }
    }
//////
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
            .then(res => res.json())
            .then(data => setPhotos(data))
    }, [])

//////
    return (
        <>
            <Context.Provider value={{ photos, toggleFavorite, addFavoriteItem, cartItems, setCartItems, removeFromCart }}>
                {props.children}
            </Context.Provider>
        </>

    )
}


export { ContextProvider, Context as Consumer }