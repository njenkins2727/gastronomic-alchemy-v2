function breakfastHeroCard({ breakfastHero }){
    return(        
    <div>
        <div className="page-header">
            <h2 className="page-title">Breakfast Hero</h2>
            <p className='page-subtext'> Be the hero that provides the most important meal of the day.. with FLAVOUR! </p>
        </div>
            <div className="card-wrapper">
            <img className="card-img" src={breakfastHero[0].img}/>
                
                <div className='text'>
                <h2 className="card-title">{breakfastHero[0].title}</h2>
                <h3 className="card-subtitle">{breakfastHero[0].date} Girlfriend Rating: {breakfastHero[0].gf}</h3>
                <p className="card-text">{breakfastHero[0].description}</p>
                </div>
                
                <div className="card-ingredient">
                <h5>Ingredients</h5>
                    <ul className="card-list">
                    <li>{breakfastHero[0].ingredients[0]}</li>
                    <li>{breakfastHero[0].ingredients[1]}</li>
                    <li>{breakfastHero[0].ingredients[2]}</li>
                    <li>{breakfastHero[0].ingredients[3]}</li>
                    <li>{breakfastHero[0].ingredients[4]}</li>
                    </ul>
                </div>
    
                <div className="card-method">
                <h5>Method</h5>
                    <ul className="card-list">
                    <li>{breakfastHero[0].method[0]}</li>
                    <li>{breakfastHero[0].method[1]}</li>
                    </ul>
                </div>
    
                <div className='card-btn'>
                <button className="btn btn-primary page-btn">Save</button>
                <button className="btn btn-primary page-btn">View</button>
                </div>
            </div>
    </div>
    )
}

export default breakfastHeroCard;