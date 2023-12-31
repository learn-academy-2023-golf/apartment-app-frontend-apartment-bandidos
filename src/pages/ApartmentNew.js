import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Col, Button, Row } from "reactstrap";
import "../App.css";
import { useNavigate } from "react-router-dom";

const ApartmentNew = ({createApartment, currentUser}) => {
  const navigate = useNavigate();
  const [newApartment, setNewApartment] = useState({
    street: "",
    city: "",
    square_footage: "",
    state: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    pets: "",
    image: "",
    unit: "",
    user_id: currentUser?.id
  });

  const handleChange = (e) => {
    setNewApartment({ ...newApartment, [e.target.name]: e.target.value });
  };

  console.log (newApartment)
  console.log (currentUser.id)

  const handleSubmit = () => {
    createApartment(newApartment);
    navigate("/apartmentprotectedindex");
  };
  return (
    <div>
      <Form>
        <Row>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleAddress">Address</Label>
              <Input
                id="exampleAddress"
                name="street"
                placeholder="1234 Main St"
                onChange={handleChange}
              />
            </FormGroup>

            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleCity">City</Label>
                  <Input id="exampleCity" name="city" onChange={handleChange} />
                </FormGroup>

                <FormGroup>
                  <Label for="exampleAddress2">Square footage</Label>
                  <Input
                    id="exampleAddress2"
                    name="square_footage"
                    placeholder=""
                    onChange = {handleChange} 
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="exampleState">State</Label>
                  <Input id="exampleState" name="state" 
                    onChange = {handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePrice">Price</Label>
                  <Input
                    id="examplePrice"
                    name="price"
                    placeholder="$0.00"
                    type="text"
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="examplePassword">Bed</Label>
                  <Input
                    id="examplePassword"
                    name="bedrooms"
                    placeholder="0"
                    type="number"
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="examplePassword">Bath</Label>
                  <Input
                    id="examplePassword"
                    name="bathrooms"
                    placeholder="0"
                    type="number"
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md={10}>
                <FormGroup>
                  <Label for="examplePassword">Pets</Label>
                  <Input
                    id="examplePassword"
                    name="pets"
                    placeholder="Yes, hippopotamuses only"
                    type="text"
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <FormGroup>
                <Label for="examplePassword">Image URL</Label>
                <Input
                  id="examplePassword"
                  name="image"
                  placeholder="URL"
                  type="text"
                  onChange={handleChange}
                />
              </FormGroup>
            </Row>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleZip">Unit</Label>
              <Input
                id="exampleZip"
                name="unit"
                placeholder="Unit Number"
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
        </Row>

        <Button onClick={handleSubmit}> Add </Button>
      </Form>
    </div>
  );
};

export default ApartmentNew;
