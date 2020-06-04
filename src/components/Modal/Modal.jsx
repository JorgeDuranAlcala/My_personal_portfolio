import React from 'react'
import classes from "./Modal.module.css"

const Modal = ({ handleClick, display }) => {
    return (
        <div className={classes.container} style={{ display }}>
            <div className={classes.modal}>
                <form>
                    <h3>Choose a Language</h3>
                    <div className={classes.button_group}>
                        <button type="button" onClick={handleClick} value="es">Spanish</button>
                        <button type="button" onClick={handleClick} value="en">English</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal
