import React, {useState} from 'react';



function Main(props) {
    const[number, setNumber]=useState(0);
    function plus() {
        setNumber(number+1)
    }
    function minus() {
        if (number>0){
            setNumber(number-1)
        }
    }
    function sbros() {
        setNumber(0)
    }
    return (
        <div>
            <div className="number">
                {number}
            </div>
            <div className="buttons">
                <button className="button-1" onClick={plus}>Увеличить</button>
                <button className="button-2" onClick={minus}>Уменьшить</button>
                <button className="button-3" onClick={sbros}>Сбросить</button>
            </div>
        </div>
    );
}

export default Main;