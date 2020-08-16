import React, { useState, useEffect } from 'react';


const PlayNumber = (props) => {
    return (
        <>
            <button className="number"
                onClick={() => props.clicked(props.status, props.number)}
                style={{ backgroundColor: colors[props.status] }}
            >{props.number}</button>
        </>
    );
}
const colors = {
    available: 'lightgray',
    used: 'lightgreen',
    wrong: 'lightcoral',
    candidate: 'deepskyblue',
};

export default PlayNumber;