import React from "react";
import Contact from "./Contact";
import properties from "../data";
import "./Services.css"; 

const Services = () => {
  return (
    <div className="property-listing">
      {properties.map((property) => (
        <Contact key={property.id} property={property} />
      ))}
    </div>
  );
};

export default Services;