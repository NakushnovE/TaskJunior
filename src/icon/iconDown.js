import React from 'react';

const IconDown = () => {
    const style = {
        display:'inline',
        marginLeft: '5px',
        marginTop: '3px',
        right: 5,
        position: 'absolute'
    }
    return (
        <svg style={style} xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16">
            <path fill-rule="evenodd" d="M12 11L6 5l-6 6h12z"/></svg>
    );
};

export default IconDown;