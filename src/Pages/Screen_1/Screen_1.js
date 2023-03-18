import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Screen_1() {

    const [input, setInput] = useState("")
    const navigate = useNavigate();

    const Submit = () => {
        // e.preventDefault();
        if (input.replace(/\s/g, '') === "") {
            alert("Please Provide Non-Empty Value");
        }
        else {
            navigate.push('screen_2');
        }
    }

    return (
        <form className='vh-100 w-100 bg-light d-flex flex-column justify-content-center align-items-center gap-2' onSubmit={Submit}>
            <h2>Screen 1</h2>
            {/* <p>Enter a string:</p> */}
            <input type="text" value={input} className='' placeholder='Enter a string' onChange={(event) => {
                setInput(event.target.value)
            }} />
            <button type='submit' className='btn btn-success'>Submit</button>
        </form>
    )
}
