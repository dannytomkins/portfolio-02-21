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
                <br />
                <img src={props.img}></img>
                <h4>{props.name}</h4>
                <p>{props.description}</p>
                <p>{props.language}</p>
                <a href={props.deployedlink} target="_blank">DEPLOYED</a>
                <br />
                <a href={props.codelink} target="_blank">GITHUB</a>
            </Modal>
        </div>
    )
}

export default PortfolioCard