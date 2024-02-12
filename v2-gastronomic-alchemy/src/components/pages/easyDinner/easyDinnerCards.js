
function easyDinnerCard({ easyDinner }){
    return(        
    <div>
                
            <div className="page-header">
            <h2 className="page-title">Easy Dinner</h2>
            <p className='page-subtext'>Tasty, low effort, high reward meals to add to your artillery of go to meals.</p>
            </div>
            
            <div className="card-wrapper">
            
            <img className="card-img" src={easyDinner[0].img}/>
                
                <div className='text'>
                <h2 className="card-title">{easyDinner[0].title}</h2>
                <h3 className="card-subtitle">{easyDinner[0].date} Girlfriend Rating: {easyDinner[0].gf}</h3>
                <p className="card-text">{easyDinner[0].description}</p>
                </div>
                
                <div className="card-ingredient">
                <h5>Ingredients</h5>
                    <ul className="card-list">
                    <li>{easyDinner[0].ingredients[0]}</li>
                    <li>{easyDinner[0].ingredients[1]}</li>
                    <li>{easyDinner[0].ingredients[2]}</li>
                    <li>{easyDinner[0].ingredients[3]}</li>
                    <li>{easyDinner[0].ingredients[4]}</li>
                    </ul>
                </div>
    
                <div className="card-method">
                <h5>Method</h5>
                    <ul className="card-list">
                    <li>{easyDinner[0].method[0]}</li>
                    <li>{easyDinner[0].method[1]}</li>
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

export default easyDinnerCard;