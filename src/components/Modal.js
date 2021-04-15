import React from 'react'
import ReactDom from 'react-dom'

import close256img from '../img/close256.png'

const OVERLAY_STYLE = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000

}


export default function Modal({props, open, children, onClose}) {
    if (!open) return null
    
    return ReactDom.createPortal(
        <>
        <div style={OVERLAY_STYLE} onClick={onClose}/>
        <div class="bigportfoliocard">
            <header class="card-header">
                <h3>{props.name}</h3>
                <img src={close256img} id="close-button" onClick={onClose}/>
            </header>
            {children}
        
        </div>
        </>,
        document.getElementById("portal")
    )
}