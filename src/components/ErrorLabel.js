import React from 'react'

const ErrorLabel = props => {

    const {children} =  props;

    return (
        <div className="text-red-600 text-xs"> 
            {children}
        </div>
    )
}



export default ErrorLabel
