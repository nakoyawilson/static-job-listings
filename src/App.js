import Listing from "./components/Listing";
import Footer from "./components/Footer";
import data from "./data.json";
import "./App.css";

const App = () => {
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
      />
    );
  };

  return (
    <div className="App">
      <h1 className="visually-hidden">Job listings with filtering</h1>
      {data.map(displayListing)}
      <Footer />
    </div>
  );
};

export default App;
