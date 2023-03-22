import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useState } from 'react';

export default function Screen_2() {

    const location = useLocation();
    const string = location.state.data;
    let successFlag = false;
    // const [successFlag, setSuccessFlag] = useState(false);

    // Duplicate character removed from the string to achieve the background color for character if we not do the same characeter get different colors  
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

    // colors for different character 
    const colors = ["#FF8066", "#62AEC5", "#ffc3d7", "#f2e3c6 ", "#17e364", "#F9F871", "#2D997C", "#C678DD", "#FFC300", "#CCBBBB", "#F5FFC6", "#C2EBD0", "#CCBBBB", "#FBEAFF", "#F3C5FF", "#787EF4", "#B27DD4", "#00C9A7", "#ADC5CF", "#4FFBDF", "#B0A8B9", "#009EFA", "#DEB2FF", "#FEFEDF", "#D07E71", "#F4E5DD", "#C70039"];

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
    const temp = [];
    const [arr_string, setArr_string] = useState(temp);
    for (let char of string.split('')) {
        for (let i of characterColors) {
            if (i.character === char) {
                temp.push({ character: char, color: i.color })
            }
        }
    }

    let same = ""; //Resultant String
    for (let char of arr_string) {
        same += char.character;
    }

    //Cheecking the resultant string
    if (same.length === characters.length) {
        successFlag = true;
    }


    function cardsUpdateRemove(key) {
        let counter = 0; // Checking Character are more than one 
        let newString = "";
        for (let char of arr_string) {
            if (char.character === arr_string[key].character) {
                counter += 1;
            }
            newString += char.character;
        }

        const value = arr_string[key].character;
        let newArr = [];

        if (characters.length !== newString.length) {
            if (counter > 1) {
                for (let i = 0; i < arr_string.length; i++) {
                    if (arr_string[i].character === value) {
                        if (key === i) {
                            newArr[i] = arr_string[i];
                        }
                    }
                    else if (arr_string[i].character !== value) {
                        newArr[i] = arr_string[i];
                    }
                    else {
                        alert("No Duplicate Exist.")
                    }
                }
                let temp = []
                newArr.map((char) => temp.push(char))
                setArr_string(temp)
            } else {
                alert(`${arr_string[key].character} has no duplicates.`)
            }

        } else {
            alert("All duplicates are removed!")
        }
    }

    return (
        <div className='min-vh-100 w-100 bg-light d-flex flex-column justify-content-center align-items-center gap-2'>
            {
                successFlag && <div className="alert alert-success w-100 text-center" role="alert">
                    <span className='fw-bold'>Success!</span> All duplicates are removed.
                </div>
            }
            <Link className='btn btn-danger my-4 fs-3' to='/'>Back</Link>
            <div className='d-flex gap-3'>
                <span className='fs-2 fw-bold text-primary'>Original String:</span>
                <span className='fs-2'>{string}</span>
            </div>
            {
                successFlag && <div className="d-flex gap-3">
                    <span className='fs-2 fw-bold text-success'>Result String:</span>
                    <span className='fs-2'>{same}</span>
                </div>
            }
            <div className='gap-2 w-75'>
                <div className="row my-5 d-flex justify-content-center align-items-center gap-2">
                    {/* Cards Generated  */}
                    {arr_string.map((char, index) => {

                        return <div className='col-1 border border-dark border-2 rounded border-primary p-3 d-flex flex-wrap flex-column flex-wrap justify-content-center align-items-center gap-2 fs-1' key={index} id={index} style={{
                            "background": char.color,
                            "minWidth": "10rem"
                        }}>
                            <p>{char.character}</p>
                            {/* <p>{char.color}</p> */}
                            <i role="button" className="fa-solid fa-trash" onClick={(event) => {
                                const parentDiv = event.target.closest('div');
                                const parentKey = parentDiv.getAttribute('id');
                                cardsUpdateRemove(parseInt(parentKey));

                            }}></i>
                        </div>
                    })}
                </div>
            </div>
        </div >
    )
}
