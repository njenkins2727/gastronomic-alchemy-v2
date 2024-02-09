import './breakfastHero.css'
import img from '../../images/carnitas-mexican.jpeg'
function BreakfastHero(){
    return(
    <div className='breakfast-hero'>
        <div className="page-header">
            <h2 className="page-title">Breakfast Hero</h2>
            <p className='page-subtext'> Be the hero that provides the most important meal of the day.. with FLAVOUR! </p>
        </div>

        <div className="card-wrapper">
          <img className="card-img" src={img}/>
            
            <div className='text'>
              <h2 className="card-title">Burrito bowl</h2>
              <h3 className="card-subtitle">03-01-24 Girlfriend Rating: </h3>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quibusdam doloremque doloribus sint illum ipsum, numquam harum reprehenderit labore, reiciendis alias distinctio aperiam exercitationem expedita itaque esse! Vel, volup...</p>
            </div>
            
            <div className="card-ingredient">
              <h5>Ingredients</h5>
                <ul className="card-list">
                  <li>Rice</li>
                  <li>Beef Mince</li>
                  <li>Avocado</li>
                  <li>Red oinion</li>
                  <li>Lime</li>
                </ul>
            </div>
  
            <div className="card-method">
              <h5>Method</h5>
                <ul className="card-list">
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptas vel, reprehenderit, hic cupiditate vero</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint debitis, eveniet quam ipsa fuga fugiat, voluptatibus aliquam pariatur accusantium quas perferendis vero est resc...</li>
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

export default BreakfastHero;