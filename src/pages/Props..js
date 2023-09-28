import React, { useState, useEffect } from "react";
import "./Props.css";


const Contact = ({ property }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    // Dynamically import the image based on property.image
    import(`.${property.image}`).then((imageModule) => {
      setImage(imageModule.default);
    });
  }, [property.image]);

  return (
    <div className="property-card">
      {image && <img src={image} id="imagess" alt="a beautiful house" />}
      {property && property.title && <h1>{property.title}</h1>}
      {property && property.location && <p>Location: {property.location}</p>}
      {property && property.price && <p>Price: {property.price}</p>}
      {property && property.bedrooms && <p>Bedrooms: {property.bedrooms}</p>}
      {property && property.bathrooms && <p>Bathrooms: {property.bathrooms}</p>}
    </div>
  );
};

export default Contact;
