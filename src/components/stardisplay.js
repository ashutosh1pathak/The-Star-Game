import React, { useState, useEffect } from 'react';
import utils from "./math.utils";
const StarsDisplay = (props) => {
    return (
        <>
            {utils.range(1, props.count).map(starId =>
                <div key={starId} className="star" />
            )}
        </>
    );
}
export default StarsDisplay;