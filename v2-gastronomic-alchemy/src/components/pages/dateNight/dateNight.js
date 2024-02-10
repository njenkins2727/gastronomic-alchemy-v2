import '../pages.css';
function DateNight({ date }){
    return(
    <div class="global">
        <div className="page-header">
            <h2 className="page-title">Date Night</h2>
            <p className='page-subtext'>Cook to impress with these perfect, romatic recipes that are sure to impress.</p>
        </div>

    {date.map(date => (

    <div className="card-wrapper">
    <img className="card-img" src={date.img}/>
        
        <div className='text'>
        <h2 className="card-title">{date.title}</h2>
        <h3 className="card-subtitle">{date.date} Girlfriend Rating: {date.gf}</h3>
        <p className="card-text">{date.description}</p>
        </div>
        
        <div className="card-ingredient">
        <h5>Ingredients</h5>
            <ul className="card-list">
            <li>{date.ingredients[0]}</li>
            <li>{date.ingredients[1]}</li>
            <li>{date.ingredients[2]}</li>
            <li>{date.ingredients[3]}</li>
            <li>{date.ingredients[4]}</li>
            </ul>
        </div>

        <div className="card-method">
        <h5>Method</h5>
            <ul className="card-list">
            <li>{date.method[0]}</li>
            <li>{date.method[1]}</li>
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

export default DateNight;