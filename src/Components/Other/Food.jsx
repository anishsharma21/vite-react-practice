import PropTypes from "prop-types";

export default function Food({ food }) {
  const foodItems = food.map((item) => <li key={item.id}>{item.title}</li>);

  return (
    <>
      <ul>{foodItems}</ul>
    </>
  );
}

Food.propTypes = {
  food: PropTypes.object.isRequired,
};
