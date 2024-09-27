import React, {useState} from 'react'




export default function TextForm(props) {
  
    const handleUpClick= ()=>{
       // console.log("Upper was clicked" + text);
        let newText =text.toUpperCase();
        setText(newText);
        props.showAlert("text converted to Uppercase", "success");
    }
    const copyText = () => {
      navigator.clipboard.writeText(text);
    props.showAlert("copy to clickboard", "success");
    }

    const handleLoClick= ()=>{
      // console.log("lower was clicked" + text);
       let newText =text.toLowerCase();
       setText(newText);
       props.showAlert("convert to Lowercase!", "success");
   }
   const handleClearClick= ()=>{
     let newText ='';
     setText(newText);
     props.showAlert("clear Text!", "success");
 }

 const handleOnchange= (event) =>{
  setText(event.target.value)

 }
 // handle from space
 const handleExtraSpace=()=>{
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("removed all extra space!", "success");
 }
 
 
    const [text, setText] = useState('');

  return (
    <>
  <div className="container" style={{color: props.mode==='dark'?'black':'white'}} >
        <h1>{props.heading}</h1>

       <div className="mb-3">

  <textarea className="form-control my-3" value={text} onChange={handleOnchange}  style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark' ? 'white':'black' }} id="MyBox" rows="8"></textarea>
</div>
  <button className='btn btn-primary mx-2 my-2' onClick={handleUpClick} >Convert to Uppercase</button>
  <button className='btn btn-primary mx-2 my-2' onClick={handleLoClick} >Convert to lowercase</button>
  <button className='btn btn-warning mx-2 my-2' onClick={handleClearClick} >Clear chat</button>
  <button className='btn btn-warning mx-2 my2' onClick={copyText} >copy text</button>
  <button className='btn btn-warning mx-2 my-2' onClick={handleExtraSpace} >remove exta space</button>  
   </div>
    <div className='container  my-3' style={{ color: props.mode==='dark'?'black':'light'}} >
      <h2>your text summery</h2>
      <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} charecters</p>
      <p> { 0.08 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"nothing to preview!"}</p>
    </div>
    </>

  )
}
