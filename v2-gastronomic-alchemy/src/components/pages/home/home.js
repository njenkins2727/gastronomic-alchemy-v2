import hero from '../../images/img-hero.png'
import './home.css'
function Home(){
    return(
        <div className="body">
            <div>
            <img src={hero} className="hero"/>
            </div>
        <div class="hero-text">
            <h1>make.food.delicious</h1>
            <p>your new go to recipe website</p>
            <button className='btn btn-primary'>view recipes</button>
        </div>
        
        </div>
    ) 
}

export default Home;