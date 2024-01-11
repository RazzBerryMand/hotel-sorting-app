import React, { useState, useEffect } from "react";
import { Results } from "./components/Results/results";
import { Sidebar } from "./components/Sidebar/sidebar";
import { data } from "./data/data";

function App() {
  const [sortedData, setSortedData] = useState(data);
  const [selectedSort, setSelectedSort] = useState("price");

  const handleSort = (type) => {
    let sorted;

    if (type === "alphabetically") {
      sorted = [...data].sort((a, b) => a.name.localeCompare(b.name));
    } else if (type === "price") {
      sorted = [...data].sort((a, b) => a.price - b.price);
    } else if (type === "rating") {
      sorted = [...data].sort((a, b) => b.rating - a.rating);
    }

    setSortedData(sorted);
    setSelectedSort(type);
  };

  useEffect(() => {
    handleSort(selectedSort);
  }, [selectedSort]);

  return (
    <div className="bg-gradient-image bg-cover bg-center">
      <div className="container mx-auto pt-12 pb-48 md:flex">
        <Sidebar onSort={handleSort} selectedSort={selectedSort} />
        <Results data={sortedData} />
      </div>
    </div>
  );
}

export default App;
