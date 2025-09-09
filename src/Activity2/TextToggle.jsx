import React, { useState } from 'react'

const TextToggle = () => {
    const[color,setColor] = useState();
    const[visible,setVisible] = useState(true);
    const[text,setText] = useState();
return (
    <div>
        <h1>Pick a Color</h1>
        <textarea rows={4} value={text} placeholder='Type Your Message Here' onchange={(e) => setText(e.target.value)}></textarea>
    <div>
    <label>Pick a color:{color} <input type='color' value={color} onchange={(e) => setColor(e.target.value)}/></label>
    <br></br>
    <button onClick={() => setVisible(!visible)}>{visible ? "Hide" : "Show"}</button>
    <button onClick={() => setText("")} disabled={!text}>Clear</button>
    </div>
    <div style = {{
        marginTop:'10px',
        width:'300px',
        maxWidth:'300px',
        height:'120px',
        padding:'10px',
        border:'1px solid #ccc',
        borderRadius:'8px',
        background:'transparent',
        overflowWrap:'anywhere'
    }}>
        {visible && <div style={{color}}>{text||"Your Text will appear here..."}</div>}
    </div>
    </div>
)
}

export default TextToggle