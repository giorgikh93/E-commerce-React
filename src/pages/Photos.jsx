import React, { useContext } from "react"
import Image from '../components/Image'
import { getClass } from '../utils/index'
import { Consumer } from '../context/Context'

function Photos() {
    const { photos } = useContext(Consumer)

    const photo = photos.map((item, index) => <Image key={item.id} img={item} className={getClass(index)} />)

    return (
        <main className="photos">
            {photo}
        </main>
    )
}

export default Photos