const FilterCriteria = (props) => {
  return (
    <div className="filter-criteria">
      <div className="criteria-list">
        {props.criteria.map((item, index) => (
          <div key={index} className="btn-criteria">
            <span className="btn-criteria-text">{item}</span>
            <button
              className="btn-remove"
              value={item}
              onClick={props.handleRemoveCriteria}
            >
              <span className="visually-hidden">
                Remove {item} from filter criteria
              </span>
            </button>
          </div>
        ))}
      </div>
      <button className="btn-clear" onClick={props.handleClear}>
        Clear
      </button>
    </div>
  );
};

export default FilterCriteria;
