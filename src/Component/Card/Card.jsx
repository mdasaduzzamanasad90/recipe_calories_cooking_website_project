import PropTypes from 'prop-types';
import Ingredients from '../ingredients/Ingredients';
import { CiClock2 } from "react-icons/ci";
import { BsFire } from "react-icons/bs";

const Card = ({cookingcard,wanttocook}) => {

    const {recipe_image,recipe_name,short_description,ingredients,preparing_time,calories}= cookingcard;

    return (
        <div className='border p-5 space-y-5 rounded-xl'>
            <img className='rounded-xl ' src={recipe_image} alt="" />
            <h1 className='font-bold text-lg'>{recipe_name}</h1>
            <p className='font-medium text-[#00000080] text-sm'>{short_description}</p>
            <div className='border-y h-52 mb-5 '> 
                <h1 className='font-semibold my-3'>Ingredients : {ingredients.length}</h1>
                {ingredients.map((item,idx) => (<Ingredients key={idx} item={item}></Ingredients>))}
            </div>
            <div className='flex items-center justify-around '>
                <div className='flex items-center gap-3'>
                    <CiClock2 />
                    <p className='font-medium text-[#00000080]'>{preparing_time} Min</p>

                </div>
                <div className='flex items-center gap-3'>
                    <BsFire />
                    <p className='font-medium text-[#00000080]'>{calories} Calories</p>

                </div>
            </div>
            <div>
                <button onClick={()=>wanttocook(cookingcard)} className='w-full bg-[#0BE58A] font-bold text-lg rounded-lg py-2'>Want to Cook</button>
            </div>
        </div>
    );
};

Card.PropTypes = {
    cookingcard: PropTypes.object.isRequired,
    wanttocook: PropTypes.func,
}

export default Card;