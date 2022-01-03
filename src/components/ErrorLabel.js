import React from 'react'

const ErrorLabel = props => {

    const {children} =  props;

    return (
        <div className="text-red-600 font-semibold"> 
            {children}
        </div>
    )
}



export default ErrorLabel
