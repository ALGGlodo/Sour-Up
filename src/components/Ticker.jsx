const tickerItems = [
    "Strawberry Rush",
    "Glutten-Free Gummies",
    "Mango Blast",
    "100% Real Ingredients",
    "Blue Raspberry Blast",
    "Less Sugar, More Flavor",
];


function Ticker(){
    return(
        <div className="ticker">
            <div className="ticker-track">
                {[...tickerItems, ...tickerItems].map((item, index) => (
                    <span className="ticker-item" key={index}>
                        {item} <span className="ticker-dot">✦</span>
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Ticker;