import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SpaceCard from "./Card/SpaceCard";
import FilterButton from "./FilterButton/FilterButton";

const Home = () => {
  const [allData, setData] = useState();

  // To find Uniq years
  let uniq = [];
  allData?.forEach((data) => {
    if (!uniq.includes(data.launch_year)) {
      uniq.push(data.launch_year);
    }
  });

  // All Launch data fatching Function
  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/launches?limit=100")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // Successful Launch data fatching Function
  const handleSuccessLaunch = (value) => {
    if (value === "true") {
      fetch(
        "https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true"
      )
        .then((res) => res.json())
        .then((data) => setData(data));
    }
    if (value === "false") {
      fetch("https://api.spacexdata.com/v3/launches?limit=100")
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  };

  // Successful Launch and Landing data fatching Function
  const handleSuccessLaunchAndLand = (value) => {
    if (value === "true") {
      fetch(
        "https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true"
      )
        .then((res) => res.json())
        .then((data) => setData(data));
    }
    if (value === "false") {
      fetch("https://api.spacexdata.com/v3/launches?limit=100")
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  };

  return (
    <div>
      <Container className="home-main">
        <h3 className="mx-2">SpaceX launch Programes</h3>
        <Row className="">
          <Col
            lg={2}
            className="rounded bg-light m-2"
            style={{ height: "700px" }}
          >
            <b>Filter</b>
            <div className="text-center mt-2">
              <p>launch year</p>
              <hr />
              <Row>
                {" "}
                {uniq.map((year) => (
                  <FilterButton key={year} year={year}></FilterButton>
                ))}
              </Row>
            </div>
            <div className="text-center mt-2">
              <p>Successful Launch</p>
              <hr />
              <div className="d-flex justify-content-between">
                <button
                  className="btn btn-bg"
                  onClick={(e) => handleSuccessLaunch("true")}
                >
                  True
                </button>
                <button
                  className="btn btn-bg"
                  onClick={(e) => handleSuccessLaunch("false")}
                >
                  False
                </button>
              </div>
            </div>
            <div className="text-center my-2">
              <p>Successful Landing</p>
              <hr />
              <div className="d-flex justify-content-between">
                <button
                  className="btn btn-bg"
                  onClick={(e) => handleSuccessLaunchAndLand("true")}
                >
                  True
                </button>
                <button
                  className="btn btn-bg"
                  onClick={(e) => handleSuccessLaunchAndLand("false")}
                >
                  False
                </button>
              </div>
            </div>
          </Col>
          <Col className=" rounded d-flex justify-content-center">
            <Row>
              {allData?.map((data) => (
                <SpaceCard key={data.mission_name} data={data}></SpaceCard>
              ))}
            </Row>
          </Col>
        </Row>
        <div className="text-center py-4">
          <p>
            Developed by: <small>Mohammad Somon Sikder</small>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Home;
