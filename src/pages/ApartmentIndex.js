import React from "react";
import {
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Card,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const ApartmentIndex = ({ apartments }) => {
  return (
    <>
      <h1>Here is a list of our apartments</h1>
      <div className="index-card">
        {apartments.map((apartment, index) => {
          return (
            <Card
              key={index}
              style={{
                width: "18rem",
              }}
            >
              <img alt={`image of ${index}`} src={apartment.image} />
              <CardBody>
                <CardTitle tag="h5">
                  Unit: {apartment.unit}, {apartment.street}, {apartment.city},{" "}
                  {apartment.state}.
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  ${apartment.price}
                </CardSubtitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Bedrooms: {apartment.bedrooms} / Bathrooms: {apartment.bathrooms}
                </CardSubtitle>
                <NavLink to={`/apartmentshow/${apartment.id}`}>
                  <Button>See more info</Button>
                </NavLink>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </>
  );
};
export default ApartmentIndex;
