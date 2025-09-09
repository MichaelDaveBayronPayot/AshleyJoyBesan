import { useState } from "react";

function Counter() {
    const[count, setCount] = useState(0)

    return(

        <div>
            <h1>Sample Counter</h1>
            <p>Count is: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>  
            </div>
    )
}
export default Counter;