import React from 'react'


function Header({ text, count }) {

    return(
        <>
            <header>
                <h1> 
                    Testing the header tag { text }
                </h1>
                <h1> 
                    You clicked {count} times
                </h1>
            </header>
        </>
    )
}

export default Header