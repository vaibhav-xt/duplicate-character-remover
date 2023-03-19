import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import dlt from '../../img/delete.png'

export default function Screen_2() {

    const location = useLocation();
    const string = location.state.data;

    return (
        <div className='vh-100 w-100 bg-light d-flex flex-column justify-content-center align-items-center gap-2 p-3'>
            <Link className='btn btn-primary' to='/'>Back</Link>
            <div className='d-flex gap-3'>
                <span className='fs-2 fw-bold text-danger'>Original String:</span>
                <span className='fs-2'>{location.state.data}</span>
            </div>
            <div className='d-flex gap-2 w-75'>
                {string.split('').map((char, index) => {
                    return <div className='d-flex flex-column flex-wrap justify-content-center align-items-center gap-2' key={index}>
                        {char}
                        <img src={dlt} className='w-50' alt="" />
                    </div>
                })}
            </div>
        </div >
    )
}
