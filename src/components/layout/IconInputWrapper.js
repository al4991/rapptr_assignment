import React from 'react'
import { IconContext } from 'react-icons';

const IconInputWrapper = ({icon, title, optError, children }) => {
    return (
        <div className="login-field">
            {title ? <label>{title}</label> : null}
            {icon ?  
                <IconContext.Provider value={{ className: "input-icon" }}>
                    {icon}
                </IconContext.Provider> 
                :null
            }
            {children}
            {optError ? optError : null}
        </div>

    )
}

export default IconInputWrapper
