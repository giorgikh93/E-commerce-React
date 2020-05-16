import {useState} from 'react'

function useHover(bool){
    const[hover,setHover] = useState(bool)


    function enter(){
        setHover(prevbool=>!prevbool)
    }

    function leave(){
        setHover(prevbool=>!prevbool)
    }
    return {hover,enter,leave}
}

export default useHover