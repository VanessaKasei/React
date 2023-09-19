import React from "react";
import "./Contact.css";




const Contact = ({property}) => {
  return (
    <div className="property-card">
      {property && property.image && (<img src={property.image} alt="a beautiful house" />)}
      {property && property.title && <h1>{property.title}</h1>}
      {property && property.location &&<p>{property.location}</p>}
      {property && property.price &&<p>Price: {property.price}</p>}
      {property && property.bedrooms &&<p>Bedrooms: {property.bedrooms}</p>}
      {property && property.bathrooms &&<p>Bathrooms: {property.bathrooms}</p>}
    </div>
  );
};
export default Contact;   