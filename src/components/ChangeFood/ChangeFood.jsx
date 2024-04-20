import './ChangeFood.css'
import toast from './img/toast.jpg'
import pizza from './img/pitsa.jpg'
import { Link } from 'react-router-dom'

function ChangeList () {
    var name = "Toast with banana flavor b l a b l a b l a b b l a"
    return (
        <dl className="ListChange">
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
    var ChangeLink = '/change';
    return (
        <div>
            <div className="ChangeList">
                <img className='ScheduleImg' src={props.image} />
                <p class="FoodSign">{ props.name }</p>
            </div>
            
        </div>
    )
}

export default function Recipes () {
    return (
        <main>
            <div className='ChangeFood'>
                <div className='ChangeHead'>
                    <h2 className='ChangeText'>This is Recipes page</h2>
                    <div className='Search'>
                        <input className='SearchBar' type="text" placeholder="Search.."></input>
                        <button className='SearchButton'>Search</button>
                    </div>
                </div>
                <div className='ChangeData'> 
                    <ChangeList />
                </div>
            </div>
        </main>
    )
}