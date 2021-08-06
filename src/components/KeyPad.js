import React from 'react';

const KeyPad =({ value, styleClass, actionHandler }) => 
{
    const handleClick = (e) => {
        actionHandler(e.target.name)
    }
    return <button name={value} className={styleClass} onClick={handleClick}>{value}</button>
}

export default KeyPad