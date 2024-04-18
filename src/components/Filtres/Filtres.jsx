import './Filtres.css'
// const { TagPicker, IBasePicker, ITag, IInputProps, IBasePickerSuggestionsProps, Toggle, IToggleStyles, mergeStyles, ThemeProvider, initializeIcons } = window.FluentUIReact;
import TagPicker from 'rsuite/TagPicker';
import 'rsuite/TagPicker/styles/index.css';
import { Button } from 'react-bootstrap';


export default function Filters () {
    const FoodList = ['Chicken', 'Pork', 'Seafood', 'Duck', 'Pickles', 'Carrot', 'Broccoli', 'Potato'].map(
        item => ({ label: item, value: item })
        
    );
    return (
        <main>
            <div className='Filtres'>
                <h2 className='Text'>Meal plan filter</h2>
                <div className='TagSelector'>
                    <div className='leftSelector'>
                        <Button className="eatButton" variant="outlined">Choose</Button>
                        <TagPicker className="TagEat" placeholder="Select what you want to eat" data={FoodList} />    
                    </div>
                    <div></div>
                    <div className='rightSelector'>
                        <Button className="noEatButton" variant="outlined">Choose</Button>
                        <TagPicker className="TagNoEat" placeholder="Select what you dont want to eat" data={FoodList} /> 
                    </div>
                </div>
            </div>
            
        </main>
    )
}