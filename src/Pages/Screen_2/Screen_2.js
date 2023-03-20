import { computeHeadingLevel } from '@testing-library/react';
import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function Screen_2() {

    const location = useLocation();
    const string = location.state.data;

    // Duplicate character removed from the string to achieve the background color for character if we not do the same characeter get different color  
    function duplicateRemover(string) {
        let newStr = "";
        for (let i of string) {
            if (!newStr.includes(i)) {
                newStr += i;
            }
        }
        return newStr;
    }
    const characters = duplicateRemover(string.replace(/\s/g, ""));
    console.log(characters)

    // colors for different character 
    const colors = ["#FF8066", "#62AEC5", "#ffc3d7", "#f2e3c6 ", "#17e364", "#F9F871", "#2D997C", "#4D9AB2", "#FFC300", "#CCBBBB", "#F5FFC6", "#C2EBD0", "#CCBBBB", "#FBEAFF", "#F3C5FF", "#787EF4", "#B27DD4", "#00C9A7", "#ADC5CF", "#4FFBDF", "#B0A8B9", "#009EFA", "#DEB2FF", "#FEFEDF", "#D07E71", "#F4E5DD", "#C70039"];

    // created an object of array with the character an color
    // example: characterColors = [{
    //     character : "a",
    //     color: "#FF8066"
    // }]
    const characterColors = [];

    // Assigning colors to character 
    for (let i = 0; i < characters.length; i++) {
        characterColors.push({ character: characters[i], color: colors[i] });
    }

    // now created arr_string for card with background color 
    const arr_string = [];
    for (let char of string.split('')) {
        for (let i of characterColors) {
            if (i.character === char) {
                arr_string.push({ character: char, color: i.color })
            }
        }
    }

    function duplicateCardRemover() {
        let newStr = "";
        for (let i of string) {
            if (!newStr.includes(i)) {
                newStr += i;
            }
        }
        return newStr;
    }

    return (
        <div className='min-vh-100 w-100 bg-light d-flex flex-column justify-content-center align-items-center gap-2 p-3'>
            <Link className='btn btn-danger my-4 fs-3' to='/'>Back</Link>
            <div className='d-flex gap-3'>
                <span className='fs-2 fw-bold text-primary'>Original String:</span>
                <span className='fs-2'>{location.state.data}</span>
            </div>
            <div className='gap-2 w-75'>
                <div className="row my-5 d-flex justify-content-center align-items-center gap-2">

                    {/* Cards Generated  */}
                    {arr_string.map((char, index) => {
                        return <div className='col-1 border border-dark border-2 rounded border-primary p-3 d-flex flex-wrap flex-column flex-wrap justify-content-center align-items-center gap-2 fs-1' key={index} style={{
                            "background": char.color,
                            "minWidth": "10rem"
                        }}>
                            {char.character}
                            {/* <p className='fs-6'>{char.color}</p> */}
                            <i role="button" className="fa-solid fa-trash" onClick={(event) => {
                                const parentDiv = event.target.closest('div');
                                // const parentKey = parentDiv.getAttribute('key');
                                console.log(event);
                            }}></i>
                        </div>
                    })}
                </div>
            </div>
        </div >
    )
}
