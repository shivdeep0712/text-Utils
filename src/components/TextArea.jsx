import React from 'react'
import { useState } from 'react'
const TextArea = () => {
  const [text,setText] = useState('');
  const handleTextChange = (e) =>{
    setText(e.target.value);
  }
  const handleUpperCase = () =>{
    const upper = text.toUpperCase();
    setText(upper);
  }
  const handleLowerCase = () =>{
    const lower = text.toLowerCase();
    setText(lower);
  }
  const handleClearText = () =>{
    setText('');
  }
  
  return (
    <div className='container'>
      <div className="mb-3">
        <label for="textArea" className="form-label my-2">Your Text-Space</label>
        <textarea className="form-control" id="textArea" value={text} onChange={handleTextChange} rows="3"></textarea>
      </div>
      {/* functionalities */}
      <button type="button" className="btn btn-outline-success mx-1" onClick={handleUpperCase}>UpperCase</button>
      <button type="button" className="btn btn-outline-success mx-1" onClick={handleLowerCase}>LowerCase</button>
      <button type="button" className="btn btn-outline-success mx-1" onClick={handleClearText}>ClearText</button>
      
      <h3 className='mt-4'>Your text summary</h3>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>

      <h3>Preview</h3>
      <p>{text}</p>
    </div>
  )
}

export default TextArea

