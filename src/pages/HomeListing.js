import React, { useState } from "react";
import Props from "./Props.";
import properties from "./data";
import "./HomeListing.css";

const Services = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredProperties, setFilteredProperties] = useState(properties);

  const handleSearchInputChange = (e) => {
    const input = e.target.value;
    setSearchInput(input);

    // Filter properties based on the search input
    const filtered = properties.filter((property) =>
      property.title.toLowerCase().includes(input.toLowerCase()) ||
      property.location.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredProperties(filtered);
  };

  return (
    <div>
      <input
        type="text"
        style={{ width: "70%", height: "40px",
        padding: "5px", marginBottom:"10px", borderRadius: "50px" }}
        placeholder="Search by location..."
        value={searchInput}
        onChange={handleSearchInputChange}
      />
      <div className="myhomes">
        {filteredProperties.map((property) => (
          <Props key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Services;
