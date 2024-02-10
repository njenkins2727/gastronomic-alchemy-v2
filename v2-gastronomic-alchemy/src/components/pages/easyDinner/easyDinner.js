import '../pages.css';
function EasyDinner({ easyDinner }){
    return(
        <div className="global">
        
        <div className="page-header">
            <h2 className="page-title">Easy Dinner</h2>
            <p className='page-subtext'>Tasty, low effort, high reward meals to add to your artillery of go to meals.</p>
        </div>

        {easyDinner.map(easyDinner => (
        <div className="card-wrapper">
        <img className="card-img" src={easyDinner.img}/>
            
            <div className='text'>
            <h2 className="card-title">{easyDinner.title}</h2>
            <h3 className="card-subtitle">{easyDinner.easyDinner} Girlfriend Rating: {easyDinner.gf}</h3>
            <p className="card-text">{easyDinner.description}</p>
            </div>
            
            <div className="card-ingredient">
            <h5>Ingredients</h5>
                <ul className="card-list">
                <li>{easyDinner.ingredients[0]}</li>
                <li>{easyDinner.ingredients[1]}</li>
                <li>{easyDinner.ingredients[2]}</li>
                <li>{easyDinner.ingredients[3]}</li>
                <li>{easyDinner.ingredients[4]}</li>
                </ul>
            </div>

            <div className="card-method">
            <h5>Method</h5>
                <ul className="card-list">
                <li>{easyDinner.method[0]}</li>
                <li>{easyDinner.method[1]}</li>
                </ul>
            </div>

            <div className='card-btn'>
            <button className="btn btn-primary page-btn">Save</button>
            <button className="btn btn-primary page-btn">View</button>
            </div>
        </div>
        ))}
        </div>
    )
}

export default EasyDinner;