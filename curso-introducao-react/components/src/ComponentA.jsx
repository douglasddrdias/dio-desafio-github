import React from "react";


function ComponentA(props) {
    const {children} = props
    return (
        <div>Component A =D
            <div>{children}</div>
        </div>
    )
}

export default ComponentA