import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = ({ icon, color}) => {
    return (
        <div>
            <FontAwesomeIcon icon={icon} className="icon" color={color}/>
        </div>
    )
}

export default Icon
