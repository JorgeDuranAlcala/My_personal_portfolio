import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = ({ icon }) => {
    return (
        <div>
            <FontAwesomeIcon icon={icon} className="icon"/>
        </div>
    )
}

export default Icon
