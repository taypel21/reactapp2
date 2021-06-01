import React from 'react'


function Button({ buttonClass, buttonText, handleClick, buttonIcon }) {

    return(
        <>
            <button className={buttonClass} onClick={ handleClick }>
                { buttonText } <i className={buttonIcon}></i>
            </button>
        </>
    )
}

export default Button