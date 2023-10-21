import React, {useState} from 'react'

const TaskOne = ({ color }) =>{
    const [state, setState] = useState(0)
    const increment = () => {
        setState (state +1)
    }
    
    return(
        <div>
            <h1 style={{ color }}>Task One </h1>
        <p>Aygul: {state}</p>
        <button onClick={increment}> +1 </button>
        </div>
    )
}


export default TaskOne;