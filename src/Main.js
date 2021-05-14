import React, {useState} from 'react';
import Buttons from "./Buttons";
import Number from "./Number";

function Main(props) {
    const[number, setNumber]=useState(0);
    function plus() {
        setNumber(number+3)
    }
    function minus() {
        if (number>1){
            setNumber(number-2)
        }
    }
    function sbros() {
        setNumber(0)
    }
    return (
        <div>
            <Number number={number}/>
            <Buttons plus={plus} minus={minus} sbros={sbros}/>
        </div>
    );
}

export default Main;