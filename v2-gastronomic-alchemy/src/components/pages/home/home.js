import hero from '../../images/imgHero.png'
import './home.css'
import EasyDinnerCard from '../easyDinner/easyDinnerCards';
import DinnerPartyCard from '../dinnerParty/dinnerPartyCard';
import DateNightCard from '../dateNight/dateNightCard';
import BreakfastHeroCard from '../breakfastHero/breakfastHeroCard';
import { breakfast, date, dinnerParty, easyDinner } from '../../utils/recipe';


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

        <h1 className='card-heading'> Check out our Categories </h1>

        <div className='card-display'>
        <EasyDinnerCard easyDinner={easyDinner}/>
        <DinnerPartyCard dinnerParty={dinnerParty}/>
        <DateNightCard dateNight={date}/>
        <BreakfastHeroCard breakfastHero={breakfast}/>
        </div>
    </div>
    ) 
}

export default Home;