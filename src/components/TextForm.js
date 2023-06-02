import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log('Uppercase was Clicked')
        let newText =text.toUpperCase()
        setText(newText)
    }

    const handleLoClick = () =>{
      console.log('Lowercase was Clicked')
      let newText =text.toLowerCase()
      setText(newText)
    }

    const handleClearClick = () =>{
      console.log('Lowercase was Clicked')
      let newText =''
      setText(newText)
    }

    const handleOnChange =(event) => {
        // console.log('Handle Onchanged')
        setText(event.target.value)
    }

    const handleCopy = () => {
      var text = document.getElementById ('mybox')
      text.select();
      navigator.clipboard.writeText(text.value)
    }

    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/)
      setText(newText.join (" "))
    }

    const [text,setText] = useState(" ")
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* <label for="myBox" class="form-label"></label> */}
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'grey':'white'}} id="myBox" rows="8"></textarea>           
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button> 
        <button className='btn btn-primary mx-1' onClick={handleLoClick }>Convert to Lowercase</button>
        <button className='btn btn-primary mx-1' onClick={handleClearClick }>Clear text</button>
        <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy text</button>
        <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove Extra spaces</button>
    </div>
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'#042743'}}>
          <h2>Your text primary</h2>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p>{0.008 *  text.split(" ").length}Minutes read</p>
          <h2>Preview</h2>
          <p>{text}</p>
    </div>
    </>
  )
}
