const FilterCriteria = (props) => {
  return (
    <div className="filter-criteria">
      <div>{props.criteria}</div>
      <button onClick={props.handleClear}>Clear</button>
    </div>
  );
};

export default FilterCriteria;
