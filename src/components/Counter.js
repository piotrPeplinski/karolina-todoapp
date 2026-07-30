import { useRef, useState } from "react";

const Counter = () => {
    const [stateCount, setStateCount] = useState(0)
    const refCount = useRef(0)
    const buttonRef = useRef(null)

    return (<div>
        <p>State count: {stateCount}</p>
        <p>Ref count: {refCount.current}</p>
        <button ref={buttonRef} onClick={()=>setStateCount(prev=>prev+1)}>Add to state</button>
        <button onClick={()=>refCount.current+=1}>Add to ref</button>
    </div>)
}

export default Counter;