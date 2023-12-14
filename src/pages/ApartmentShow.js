import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import {
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Card,
} from "reactstrap";

const ApartmentShow = ({apartments}) => {

  let {id} = useParams()
  const apartment = apartments?.find((apartment) => apartment.id === +id)

  return (
    <>
    <Card
              style={{
                width: "18rem",
              }}
            >
              <img alt={`image of ${apartment.id}`} src={apartment.image} />
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
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Square footage: {apartment.square_footage}
                </CardSubtitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Pets: {apartment.pets}
                </CardSubtitle>
                <NavLink to={`/apartmentindex`}>
                  <Button>Back to listing</Button>
                </NavLink>
              </CardBody>
            </Card>
            </>
  )
}

export default ApartmentShow