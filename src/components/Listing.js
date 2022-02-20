import Badge from "./Badge";
import FilterTablet from "./FilterTablet";

const Listing = (props) => {
  const displayFilterTablet = (item, index) => {
    return <FilterTablet key={index} filterCriteria={item} />;
  };

  return (
    <section className="listing">
      <div className="listing-details">
        <div className="image-wrapper">
          <img src={props.logo} alt={`${props.company} logo`} />
        </div>
        <div className="listing-text">
          <h2 className="company">{props.company}</h2>
          {props.new && <Badge badgeClass="new" badgeText="New!" />}
          {props.featured && (
            <Badge badgeClass="featured" badgeText="Featured" />
          )}
          <h3>{props.position}</h3>
          <span className="detail">{props.postedAt}</span>
          <span className="detail">{props.contract}</span>
          <span className="detail">{props.location}</span>
        </div>
      </div>
      <div className="filter-tablets">
        <FilterTablet filterCriteria={props.role} />
        <FilterTablet filterCriteria={props.level} />
        {props.languages.map(displayFilterTablet)}
        {props.tools.map(displayFilterTablet)}
      </div>
    </section>
  );
};

export default Listing;
