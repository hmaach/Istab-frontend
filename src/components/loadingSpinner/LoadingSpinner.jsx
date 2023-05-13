import React from 'react'
import './spinner.css'

const LoadingSpinner = () => {
    return (
        <div className="spinner-container">
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default LoadingSpinner
