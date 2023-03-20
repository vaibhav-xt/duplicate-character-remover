import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Screen_1() {

    const [input, setInput] = useState("")
    const navigate = useNavigate();

    const Submit = (e) => {
        e.preventDefault();
        if (input.replace(/\s/g, '') === "") {
            alert("Please Provide Non-Empty Value");
        } else if (input.length >= 27) {
            alert("Please insert characters less than 27")
        }
        else {
            navigate('/screen_2', { state: { data: input } })
        }
    }

    return (
        <main className='bg-light vh-100 w-100'>
            <h1 className='w-100 text-center p-3 bg-info'>Duplicate Character Remover</h1>
            <form className='d-flex flex-column justify-content-center align-items-center gap-2' onSubmit={Submit}>
                <h2>Screen 1</h2>
                <p>Enter a string:</p>
                <input type="text" value={input} className='' onChange={(event) => {
                    setInput(event.target.value)
                }} />
                <button type='submit' className='btn btn-success'>Submit</button>
            </form>
        </main>
    )
}
