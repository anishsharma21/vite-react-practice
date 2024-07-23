import PropTypes from "prop-types";

export default function Counter({ count, onClick }) {
  return (
    <>
      <button onClick={onClick}>Count = {count}</button>
    </>
  );
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
