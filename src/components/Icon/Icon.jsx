import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = ({ icon, color, cls}) => {
    return (
        <div>
            <FontAwesomeIcon icon={icon} className={cls} color={color}/>
        </div>
    )
}

export default Icon
