import React from "react";
import { Button, Col } from "react-bootstrap";
import "./FilterButton.css";
const FilterButton = ({ year }) => {
  return (
    <Col lg={6} xs={6} md={6}>
      <Button className="m-2 btn-bg">{year} </Button>
    </Col>
  );
};

export default FilterButton;
