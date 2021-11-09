import React from 'react';

const IconUp = () => {
    const style = {
        display:'inline',
        marginLeft: '5px',
        marginTop: '3px',
        right: 5,
        position: 'absolute'
    }
    return (
        <svg style={style} xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16">
            <path fill-rule="evenodd" d="M0 5l6 6 6-6H0z"/></svg>
    );
};

export default IconUp;