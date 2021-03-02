
function PortfolioCard(props) {
    
    return (
    <div class="portfoliocard">
        <img src={props.img}></img>
        <h4>{props.name}</h4>
        <p>{props.description}</p>
    </div>
    )
}

export default PortfolioCard