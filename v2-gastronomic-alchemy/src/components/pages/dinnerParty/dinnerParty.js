import '../pages.css';
function DinnerParty({ dinnerParty }){
    return(
        <div className="global">

        <div className="page-header">
            <h2 className="page-title">Dinner Party</h2>
            <p className='page-subtext'>Elevate every gathering with these delicious dinner delights</p>
        </div>
        
        {dinnerParty.map(dinnerParty => (

<div className="card-wrapper">
<img className="card-img" src={dinnerParty.img}/>
    
    <div className='text'>
    <h2 className="card-title">{dinnerParty.title}</h2>
    <h3 className="card-subtitle">{dinnerParty.dinnerParty} Girlfriend Rating: {dinnerParty.gf}</h3>
    <p className="card-text">{dinnerParty.description}</p>
    </div>
    
    <div className="card-ingredient">
    <h5>Ingredients</h5>
        <ul className="card-list">
        <li>{dinnerParty.ingredients[0]}</li>
        <li>{dinnerParty.ingredients[1]}</li>
        <li>{dinnerParty.ingredients[2]}</li>
        <li>{dinnerParty.ingredients[3]}</li>
        <li>{dinnerParty.ingredients[4]}</li>
        </ul>
    </div>

    <div className="card-method">
    <h5>Method</h5>
        <ul className="card-list">
        <li>{dinnerParty.method[0]}</li>
        <li>{dinnerParty.method[1]}</li>
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

export default DinnerParty;