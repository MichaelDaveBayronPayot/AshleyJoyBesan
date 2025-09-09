import { useState } from 'react'

function FormInput() {
  const [string, setString] = useState("")

  return (
    <div>
      <h2>Form Input Example</h2>
      <input 
        className='text-input'
        type="text" 
        placeholder="Share your Story" 
        value={string}
        onChange={(e) => setString(e.target.value)} 
      />
      
      {/* Preview bubble */}
      {string && <p className="preview-text">{string}</p>}
    </div>
  )
}

export default FormInput
