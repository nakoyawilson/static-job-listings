const FilterTablet = (props) => {
  return (
    <button
      className="filter-tablet"
      onClick={props.handleClick}
      value={props.filterCriteria}
    >
      {props.filterCriteria}
    </button>
  );
};

export default FilterTablet;
