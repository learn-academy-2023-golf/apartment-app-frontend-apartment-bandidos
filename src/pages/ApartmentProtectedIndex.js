import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const ApartmentProtectedIndex = ({
  apartments,
  currentUser,
  deleteApartment,
}) => {
  const myApartments = apartments.filter(
    (apartment) => currentUser.id === apartment.user_id
  );
  return (
    <div>
      {myApartments.map((apartment, index) => {
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
              <CardSubtitle
                aria-label={`BD/BA ${apartment.id}`}
                className="mb-2 text-muted"
                tag="h6"
              >
                Bedrooms: {apartment.bedrooms} / Bathrooms:{" "}
                {apartment.bathrooms}
              </CardSubtitle>
              <NavLink to={`/apartmentshow/${apartment.id}`}>
                <Button aria-label={`Info ${apartment.id}`}>
                  See more info
                </Button>
              </NavLink>
              <NavLink to={`/apartmentedit/${apartment.id}`}>
                <Button aria-label={`Edit ${apartment.id}`}>
                  Edit Listing
                </Button>
              </NavLink>
              <Button
                aria-label={`Delete ${apartment.id}`}
                onClick={() => deleteApartment(apartment.id)}
              >
                Delete Listing
              </Button>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
};

export default ApartmentProtectedIndex;
