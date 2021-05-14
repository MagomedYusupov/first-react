import React from 'react';

function Buttons(props) {

    return (
        <div className="buttons">
            <button className="button-1" onClick={props.plus}>Увеличить</button>
            <button className="button-2" onClick={props.minus}>Уменьшить</button>
            <button className="button-3" onClick={props.sbros}>Сбросить</button>
        </div>
    );
}

export default Buttons;





