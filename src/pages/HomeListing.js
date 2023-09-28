import React from "react";
import Props from "./Props.";
import properties from "./data";
import "./HomeListing.css"; 

const Services = () => {
  return (
    <div className="property-listing">
      {properties.map((property) => (
        <Props key={property.id} property={property} />
      ))}
    </div>
  );
};

export default Services;