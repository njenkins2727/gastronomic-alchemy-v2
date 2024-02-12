function dateNightCard({ dateNight }){
    return(        
    <div>
        <div className="page-header">
            <h2 className="page-title">Date Night</h2>
            <p className='page-subtext'>Cook to impress with these perfect, romatic recipes that are sure to impress.</p>
        </div>
            <div className="card-wrapper">
            <img className="card-img" src={dateNight[0].img}/>
                
                <div className='text'>
                <h2 className="card-title">{dateNight[0].title}</h2>
                <h3 className="card-subtitle">{dateNight[0].date} Girlfriend Rating: {dateNight[0].gf}</h3>
                <p className="card-text">{dateNight[0].description}</p>
                </div>
                
                <div className="card-ingredient">
                <h5>Ingredients</h5>
                    <ul className="card-list">
                    <li>{dateNight[0].ingredients[0]}</li>
                    <li>{dateNight[0].ingredients[1]}</li>
                    <li>{dateNight[0].ingredients[2]}</li>
                    <li>{dateNight[0].ingredients[3]}</li>
                    <li>{dateNight[0].ingredients[4]}</li>
                    </ul>
                </div>
    
                <div className="card-method">
                <h5>Method</h5>
                    <ul className="card-list">
                    <li>{dateNight[0].method[0]}</li>
                    <li>{dateNight[0].method[1]}</li>
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

export default dateNightCard;