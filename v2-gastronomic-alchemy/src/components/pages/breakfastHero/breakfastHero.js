import '../pages.css';
function BreakfastHero({ breakfast }){
    return(
    <div className='global'>
        <div className="page-header">
            <h2 className="page-title">Breakfast Hero</h2>
            <p className='page-subtext'> Be the hero that provides the most important meal of the day.. with FLAVOUR! </p>
        </div>
      {breakfast.map(breakfast => (

        <div className="card-wrapper">
          <img className="card-img" src={breakfast.img}/>
            
            <div className='text'>
              <h2 className="card-title">{breakfast.title}</h2>
              <h3 className="card-subtitle">{breakfast.date} Girlfriend Rating: {breakfast.gf}</h3>
              <p className="card-text">{breakfast.description}</p>
            </div>
            
            <div className="card-ingredient">
              <h5>Ingredients</h5>
                <ul className="card-list">
                  <li>{breakfast.ingredients[0]}</li>
                  <li>{breakfast.ingredients[1]}</li>
                  <li>{breakfast.ingredients[2]}</li>
                  <li>{breakfast.ingredients[3]}</li>
                  <li>{breakfast.ingredients[4]}</li>
                </ul>
            </div>
  
            <div className="card-method">
              <h5>Method</h5>
                <ul className="card-list">
                  <li>{breakfast.method[0]}</li>
                  <li>{breakfast.method[1]}</li>
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

export default BreakfastHero;

// work on extracting arrays and putting them into a <li>


