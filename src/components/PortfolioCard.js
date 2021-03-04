import '../App.css';
import React, { useState } from 'react'

import Modal from './Modal'


function PortfolioCard(props) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div class="portfoliocard">
            <img src={props.img}></img>
            <h4>{props.name}</h4>
            <p>{props.description}</p>
            <button onClick={() => setIsOpen(true)}>Open Modal</button>
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                Fancy Modal
                <img src={props.img}></img>
                <h4>{props.name}</h4>
                <p>{props.description}</p>
                <p>{props.language}</p>
                <p>{props.deployedlink}</p>
                <p>{props.codelink}</p>
            </Modal>
        </div>
    )
}

export default PortfolioCard