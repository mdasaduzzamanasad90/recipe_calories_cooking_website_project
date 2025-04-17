import PropTypes from "prop-types";

const Item = ({item,preparingfunc}) => {
    const {recipe_name,preparing_time,calories} = item;

    return (
        <tr>
            <td className="text-sm">{recipe_name}</td>
            <td className="text-sm">{preparing_time} Min</td>
            <td className="text-sm">{calories}</td>
            <td>
                <button onClick={()=>preparingfunc(item)} className="px-4 py-1 bg-[#0BE58A] rounded-lg font-bold">Preparing</button>
            </td>
        </tr>
    );
};

Item.PropTypes={
    item: PropTypes.object.isRequired,
    preparingfunc: PropTypes.func,

}

export default Item;