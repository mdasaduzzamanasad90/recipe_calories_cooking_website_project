import PropTypes from "prop-types";

const Prepar = ({preparing}) => {
    const {recipe_name,preparing_time,calories} = preparing;
    return (
        <tr>
            <td>{recipe_name}</td>
            <td>{preparing_time}</td>
            <td>{calories}</td>
        </tr>
    );
};


Prepar.PropTypes={
    preparing: PropTypes.object.isRequired,
}

export default Prepar;