import PropTypes from "prop-types";

const Ingredients = (item) => {

    return (
        <div className="list-item ml-6 font-normal text-[#00000080] text-sm">

            {item.item}

        </div>

    );
};

Ingredients.PropTypes={
    item: PropTypes.object.isRequired,
}

export default Ingredients;