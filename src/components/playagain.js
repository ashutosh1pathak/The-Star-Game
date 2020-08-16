
import React, { useState, useEffect } from 'react';

const PlayAgain = (props) => {
    return (
        <div className='game-done'>
            <div className='message'
                style={{ color: props.stats == 'won' ? 'blue' : 'red' }}
            >
                {props.stats == 'won' ? 'Well Done' : 'Try Again'}

            </div>
            <button onClick={props.clicked}>Play Again</button>
        </div>
    );
}
export default PlayAgain;