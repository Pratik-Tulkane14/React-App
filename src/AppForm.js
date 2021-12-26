import React,{useState} from 'react'

export default function AppForm(props) {
        const handleToUpCase = () =>{
            let newText = text.toLocaleUpperCase();
            setText(newText);        
        }
        const handleToLoCase = () =>{
            let newText = text.toLowerCase();
            setText(newText);        
        }
        const handleToClear = () =>{
            // console.log("click"  + text);
            let newText = " ";
            setText(newText);        
        }

        const handelOnChange = (event) =>{
            setText(event.target.value);
        }

    const [text,setText] = useState('');
    return (
        <>
    <div> 
        <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" placeholder='Enter the text' value={text} onChange={handelOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleToUpCase}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleToLoCase}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={handleToClear}>Clear All</button>
    </div>
    <div className="container my-3">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
    </div>
    </>
    )
}

