

function PortfolioCard(props) {
    
    return (
        <div class="bigportfoliocard">
            <img src={props.img}></img>
            <h4>{props.name}</h4>
            <p>{props.description}</p>
            <a href="https://github.com/niceynice" target="_blank">GitHub</a>
        </div>
    )
}

export default PortfolioCard