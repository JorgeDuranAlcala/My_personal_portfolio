import React from 'react'
import classes from "./Modal.module.css"

//import Icon from './components/Icon/Icon';
import UKI from "../../assets/img/svgs/reino-unido.svg"
import ES from "../../assets/img/svgs/espana.svg"

const Modal = ({ handleClick, display }) => {
    return (
        <div className={classes.container} style={{ display }}>
            <div className={classes.modal}>
                <form>
                    <h3>✨ Choose a Language  ✨</h3>
                    <div className={classes.button_group}>
                        <button type="button" onClick={handleClick} value="es">
                            <div className={classes.UK}>
                                <img src={ES}/>
                            </div>
                            Espanol
                        </button>
                        <button type="button" onClick={handleClick} value="en">
                            <div className={classes.UK}>
                                <img src={UKI}/>
                            </div>
                           English
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal
