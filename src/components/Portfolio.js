import PortfolioCard from "./PortfolioCard"


function Portfolio(props) {
    const allCards = props.portfolioItems.map(item => {
        return (
        <PortfolioCard
        id={item.id}
        name={item.name}
        language={item.language}
        tech={item.tech}
        description={item.description}
        img={item.img}
        deployedlink={item.deployedlink}
        codelink={item.codelink}
        />
    )})
    return (
        <div id="portfolio" class="mainitem">
            <h2>Portfolio</h2>
            <div class="portfoliocardholder">
                {allCards}
            </div>
        </div>
    )

}

export default Portfolio;