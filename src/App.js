import { useState } from "react";
import FilterCriteria from "./components/FilterCriteria";
import Listing from "./components/Listing";
import Footer from "./components/Footer";
import data from "./data.json";
// import data from "./data-development.json";
import "./App.css";

const App = () => {
  const [criteria, setCriteria] = useState([]);

  const handleClear = () => {
    setCriteria([]);
  };

  const handleRemoveCriteria = (e) => {
    e.stopPropagation();
    const itemToRemove = e.target.value;
    const interimArray = [...criteria];
    const filteredArray = interimArray.filter((item) => item !== itemToRemove);
    setCriteria(filteredArray);
  };

  const handleClick = (e) => {
    const interimArray = [...criteria];
    interimArray.push(e.target.value);
    setCriteria(interimArray);
  };

  const filtered =
    criteria.length === 0
      ? data
      : data.filter((item) => {
          return criteria.every((criterion) => {
            return (
              item.role === criterion ||
              item.level === criterion ||
              item.languages.includes(criterion) ||
              item.tools.includes(criterion)
            );
          });
        });

  const displayListing = (item) => {
    return (
      <Listing
        key={item.id}
        company={item.company}
        logo={item.logo}
        new={item.new}
        featured={item.featured}
        position={item.position}
        role={item.role}
        level={item.level}
        postedAt={item.postedAt}
        contract={item.contract}
        location={item.location}
        languages={item.languages}
        tools={item.tools}
        handleClick={handleClick}
      />
    );
  };

  return (
    <>
      <main>
        <h1 className="visually-hidden">Job listings with filtering</h1>
        <div className="listings-wrapper">
          {criteria.length > 0 && (
            <FilterCriteria
              handleClear={handleClear}
              handleRemoveCriteria={handleRemoveCriteria}
              criteria={criteria}
            />
          )}
          {filtered.map(displayListing)}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
