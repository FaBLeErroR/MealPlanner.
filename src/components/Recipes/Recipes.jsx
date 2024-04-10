import './Recipes.css'
import toast from './img/toast.jpg'
import pizza from './img/pitsa.jpg'
import { Link } from 'react-router-dom'

function RecipesList () {
    var name = "Toast with banana flavor b l a b l a b l a b b l a"
    return (
        <dl className="ListFood">
            <Link className="FoodList" to="/food"><Food name={ name } image={toast} /></Link>
            <Link className="FoodList" to="/food"><Food name={ name } image={toast} /></Link>
            <Link className="FoodList" to="/food"><Food name={ name } image={pizza} /></Link>
            <Link className="FoodList" to="/food"><Food name={ name } image={pizza} /></Link> 
            <Link className="FoodList" to="/food"><Food name={ name } image={toast} /></Link>
            <Link className="FoodList" to="/food"><Food name={ name } image={toast} /></Link>
            <Link className="FoodList" to="/food"><Food name={ name } image={pizza} /></Link>
            <Link className="FoodList" to="/food"><Food name={ name } image={pizza} /></Link>  
            <Link className="FoodList" to="/food"><Food name={ name } image={toast} /></Link>
            <Link className="FoodList" to="/food"><Food name={ name } image={toast} /></Link>
            <Link className="FoodList" to="/food"><Food name={ name } image={pizza} /></Link>
            <Link className="FoodList" to="/food"><Food name={ name } image={pizza} /></Link>  
            <Link className="FoodList" to="/food"><Food name={ name } image={toast} /></Link>
            <Link className="FoodList" to="/food"><Food name={ name } image={toast} /></Link>
            <Link className="FoodList" to="/food"><Food name={ name } image={pizza} /></Link>
            <Link className="FoodList" to="/food"><Food name={ name } image={pizza} /></Link>   
        </dl>
    )
}

function Food (props) {
    var ChangeLink = '/change/' + props.time;
    return (
        <div>
            <div className="RecipesList">
                <img className='ScheduleImg' src={props.image} />
                <p class="FoodSign">{ props.name }</p>
            </div>
            
        </div>
    )
}

export default function Recipes () {
    return (
        <main>
            <div className='Recipes'>
                <h2 className='Text'>This is Recipes page</h2>
                <div className='RecepiData'> 
                    <RecipesList />
                </div>
            </div>
        </main>
    )
}