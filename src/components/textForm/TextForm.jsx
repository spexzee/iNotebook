import React, { useState } from 'react';
import './textForm.css';

const TextForm = (props) => {
  //  usestate copy text
  const [txtCopied, setTxtCopied] = useState('Copy Text');

  // usestate for color 
  const [clr, setClr] = useState('primary');

  // usestate for text 
  const [text, setText] = useState('');

  // to write something on textarea 
  const handleChange = (event) => {
    setText(event.target.value); //this is help us to write in textarea box
  }

  // change text into uppercase 
  const handleUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  // change text into lowercase 
  const handleLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  // clear text 
  const handleClear = () => {
    let newText = '';
    setText(newText);
  }
  // Capitalize text 
  const handleCap = () => {
    const mySentence = text
    const words = mySentence.split(" ");

    let newText = words.map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    }).join(" ");
    setText(newText);
  }

  // copy text 
  const handleCopy = () => {
    let copyText = document.getElementById('textArea');

    // Select the text field
    copyText.select();

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    document.getSelection().removeAllRanges();

    setTxtCopied('Text Copied');
    setClr('success')

    // returmimg its normal state 
    setTimeout(() => {
      setTxtCopied('Copt Text');
      setClr('primary')
    }, 900)
  }


  return (
    <div className='container'>
      <div className="mb-3">
        <h1 className='mb-3' style={{ fontSize: '25px' }}>{props.heading}</h1>
        <textarea
          id='textArea'
          value={text}
          className="form-control border-1 border-black"
          rows={8}
          onChange={handleChange}
          style={{ backgroundColor: props.mode === 'dark' ? '#153655' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
        />
      </div>
      <div className="prac__btn d-flex flex-wrap gap-2">
        {/* event buttons  */}
        <button disabled={text.length === 0} className='btn btn-primary' onClick={handleUpper}>Convert Uppercase</button>
        <button disabled={text.length === 0} className='btn btn-primary' onClick={handleLower}>Convert Lowercase</button>
        <button disabled={text.length === 0} className='btn btn-primary' onClick={handleCap}>Capitalize Text</button>
        <button disabled={text.length === 0} className={`btn btn-${clr}`} onClick={handleCopy}>{txtCopied}</button>
        <button disabled={text.length === 0} className='btn btn-primary' onClick={handleClear}>Clear Text</button>
      </div>
      <div className="show my-2">
        <div className="">
          <p className='fw-bold my-1'>{text.length > 0 ? text.split(' ').filter((element) => { return element !== 0 }).length : '0'} words , {text.length} letters</p>
        </div>
        <div className="">
          <p>{text.length > 0 ? 0.008 * text.split(' ').filter((element) => { return element !== 0 }).length : '0'} Minutes to read</p>
        </div>
      </div>
      <div className="preview my-3">
        <h3>Preview</h3>
        <p className='my-1' id='text'>{text.length > 0 ? text : 'Nothing to preview here :('}</p>
      </div>

    </div>
  )
}

export default TextForm