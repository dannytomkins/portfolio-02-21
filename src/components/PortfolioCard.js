import '../App.css';
import React, { useState } from 'react'

import Modal from './Modal'




function PortfolioCard(props) {
    const [isOpen, setIsOpen] = useState(false)
    
    const languageList = props.language.map(language => {
        return (
                <li>{language}</li>
        )
    })
    const techList = props.tech.map(tech => {
        return (
                <li>{tech}</li>
        )
    })

    return (
        <>
        <div class="portfoliocard" onClick={() => setIsOpen(true)}>
            <img src={props.img}></img>
            <h4>{props.name}</h4>
            <p>{props.description}</p>
        </div>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                {/* Fancy Modal */}
                <br />
                <img src={props.img}></img>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <br/>
                <h4>Tech used:</h4>
                <ul>{languageList}</ul>
                <ul>{techList}</ul>
                <ul>
                    <li>
                    <a href={props.deployedlink} target="_blank">Check it out!</a>
                    </li>
                    <li>
                    <a href={props.codelink} target="_blank">Or check out the code on GitHub!</a>
                    </li>
                </ul>
            </Modal>
        </>
    )
}

export default PortfolioCard