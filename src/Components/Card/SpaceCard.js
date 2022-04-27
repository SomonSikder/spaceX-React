import React from "react";
import { Card, Col } from "react-bootstrap";

const SpaceCard = ({ data }) => {
  const {
    mission_name,
    links,
    mission_id,
    launch_year,
    launch_success,
    flight_number,
  } = data;

  return (
    <Col xs={12} lg={3} md={4} sm={12} className="my-2">
      <Card style={{ width: "12rem", border: "none", padding: "8px" }}>
        <Card.Img
          variant="top"
          src={links.mission_patch_small}
          style={{ background: "#f2f2f2" }}
        />
        <Card.Body>
          <Card.Title>
            {mission_name}# {flight_number}
          </Card.Title>
          <Card.Text>
            <small>
              <b> Mission Ids:</b>
              {mission_id.forEach((id) => {
                <ul>
                  <li>{id}</li>
                </ul>;
              })}
            </small>
            <br />
            <small>
              <b>Launch Year: </b>
              <span className="text-info">{launch_year}</span>
            </small>
            <br />
            <small>
              <b>Successful Launch:</b>
              {launch_success}
            </small>
            <br />
            <small>
              <b>Successful Landing:</b> {}
            </small>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SpaceCard;
