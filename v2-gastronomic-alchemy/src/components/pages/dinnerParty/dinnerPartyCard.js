
function dinnerPartyCard({ dinnerParty }){
    
    return(        
    <div>
        <div className="page-header">
            <h2 className="page-title">Dinner Party</h2>
            <p className='page-subtext'>Elevate every gathering with these delicious dinner delights</p>
        </div>
            <div className="card-wrapper">
            <img className="card-img" src={dinnerParty[0].img}/>
                
                <div className='text'>
                <h2 className="card-title">{dinnerParty[0].title}</h2>
                <h3 className="card-subtitle">{dinnerParty[0].date} Girlfriend Rating: {dinnerParty[0].gf}</h3>
                <p className="card-text">{dinnerParty[0].description}</p>
                </div>
                
                <div className="card-ingredient">
                <h5>Ingredients</h5>
                    <ul className="card-list">
                    <li>{dinnerParty[0].ingredients[0]}</li>
                    <li>{dinnerParty[0].ingredients[1]}</li>
                    <li>{dinnerParty[0].ingredients[2]}</li>
                    <li>{dinnerParty[0].ingredients[3]}</li>
                    <li>{dinnerParty[0].ingredients[4]}</li>
                    </ul>
                </div>
    
                <div className="card-method">
                <h5>Method</h5>
                    <ul className="card-list">
                    <li>{dinnerParty[0].method[0]}</li>
                    <li>{dinnerParty[0].method[1]}</li>
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

export default dinnerPartyCard;