import { useState } from "react"

function Toggle() {
    const[visible, setVisible] = useState(true)
    

    return(
        <div>
            <h2>Sample Switching</h2>
            <button onClick={() => setVisible(!visible)}>
            {visible ?   "Hide Password" : "Show Password"} </button>
            {visible && <p>I Am the ROCK</p>} 
        </div>
    )
}
export default Toggle;