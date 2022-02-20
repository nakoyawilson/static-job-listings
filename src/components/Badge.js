const Badge = (props) => {
  return <span className={`badge ${props.badgeClass}`}>{props.badgeText}</span>;
};

export default Badge;
