import React, { useState, useEffect } from "react";
import { Row, Col, Input, FormGroup, Label, Button } from "reactstrap";
import image from "../assets/images/image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUserGroup,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import Progressbar from "./progressbar";

function OnBoardingflow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [type, setType] = useState("individual");
  const [finalData, setFinalData] = useState({});
  const setFormdata = (e) => {
    setFinalData({
      [e.target.name]: e.target.value,
    });
  };

  const buttonHandler = (currentStep) => {
    console.log("currentStep: ", currentStep);
    setCurrentStep(currentStep + 1);
  };
  useEffect(() => {}, [currentStep]);

  return (
    <div className="container">
      <Row
        style={{ height: "100vh" }}
        className="justify-content-center align-items-center w-100"
      >
        <Col md="4" sm="12" xs="12">
          <Row className="mt-3">
            <Col xs="12">
              <div className="wrapper">
                <div className="logo_continer">
                  <img src={image} alt="logo" />
                  <h1 className="brand_name mb-0">Eden</h1>
                </div>
                <div className="mt-5">
                  <Row className="d-flex justify-content-center">
                    <Col md="8" xs="10" sm="10">
                      <Progressbar currentStep={currentStep} />
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="12" className="mt-5">
              <div className="form_container">
                <form>
                  <div
                    className={`step-1 d-${
                      currentStep + 1 === 1 ? "block" : "none"
                    }`}
                  >
                    <div className="heading_container text-center">
                      <h3 className="heading">
                        Welcome! First things first...
                      </h3>
                      <span className="sub-heading text-muted">
                        You can always change them later.
                      </span>
                    </div>
                    <div className="stepForm_container mt-5">
                      <FormGroup
                        key={"full_name"}
                        className="align-items-center"
                        row
                      >
                        <Label className="col-xs-12 col-sm-12 col-md-12 col-lg-12 control-label mb-1 label ">
                          Full Name
                        </Label>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <Input
                            type="text"
                            name="full_name"
                            onChange={(e) => setFormdata(e)}
                            placeholder="Steve Jobs"
                          />
                        </div>
                      </FormGroup>
                      <FormGroup
                        key={"display_name"}
                        className="align-items-center"
                        row
                      >
                        <Label className="col-xs-12 col-sm-12 col-md-12 col-lg-12 control-label mb-1 label ">
                          Display Name
                        </Label>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <Input
                            type="text"
                            name="display_name"
                            onChange={(e) => setFormdata(e)}
                            placeholder="Steve"
                          />
                        </div>
                      </FormGroup>
                      <Button
                        onClick={() => {
                          buttonHandler(currentStep);
                        }}
                        className=" mb-3 w-100 button"
                        type="button"
                      >
                        Create Workspace
                      </Button>
                    </div>
                  </div>
                  <div
                    className={`step-2 d-${
                      currentStep + 1 === 2 ? "block" : "none"
                    }`}
                  >
                    <div className="heading_container text-center">
                      <h3 className="heading">
                        Let's set up a home for all your work
                      </h3>
                      <span className="sub-heading text-muted">
                        You can always create another Workspace later.
                      </span>
                    </div>
                    <div className="stepForm_container mt-5">
                      <FormGroup
                        key={"workspace_name"}
                        className="align-items-center"
                        row
                      >
                        <Label className="col-xs-12 col-sm-12 col-md-12 col-lg-12 control-label mb-1 label ">
                          Workspace Name
                        </Label>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <Input
                            type="text"
                            name="workspace_name"
                            onChange={(e) => setFormdata(e)}
                            placeholder="Eden"
                          />
                        </div>
                      </FormGroup>
                      <FormGroup
                        key={"workspace_url"}
                        className="align-items-center"
                        row
                      >
                        <Label className="col-xs-12 col-sm-12 col-md-12 col-lg-12 control-label mb-1 label ">
                          Workspace URL
                          <small className="text-muted ms-2">(optional)</small>
                        </Label>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <Row noGutters>
                            <Col md="4" sm="3" xs="4">
                              <Input
                                disabled
                                type="text"
                                value="www.eden.com/"
                                className="text-muted default-text"
                              />
                            </Col>
                            <Col md="8" sm="9" xs="8">
                              <Input
                                type="text"
                                name="workspace_url"
                                onChange={(e) => setFormdata(e)}
                                placeholder="Example"
                                className="flex-grow-1 default-text-input"
                              />
                            </Col>
                          </Row>
                        </div>
                      </FormGroup>
                      <Button
                        onClick={() => {
                          buttonHandler(currentStep);
                        }}
                        className=" mb-3 w-100 button"
                        type="button"
                      >
                        Create Workspace
                      </Button>
                    </div>
                  </div>
                  <div
                    className={`step-3 d-${
                      currentStep + 1 === 3 ? "block" : "none"
                    }`}
                  >
                    <div className="heading_container text-center">
                      <h3 className="heading">
                        How are you planning to use Eden?
                      </h3>
                      <span className="sub-heading text-muted">
                        We'll streamline your setup accordingly.
                      </span>
                    </div>
                    <div className="stepForm_container mt-5">
                      <div className="cards_container mb-3">
                        <Row className={`d-flex justify-content-center `}>
                          <Col md="6" xs="12" sm="12" className="">
                            <div
                              className="cards left_card mb-3 mb-md-0"
                              onClick={() => setType("individual")}
                              style={{
                                border: `2px solid ${
                                  type === "individual" ? "#5851d3" : "#ececec"
                                }`,
                              }}
                            >
                              <span>
                                {" "}
                                <FontAwesomeIcon
                                  icon={faUser}
                                  color={`${
                                    type === "individual" ? "#5851d3" : "#000"
                                  }`}
                                />
                              </span>
                              <div className="desc_text mt-3">
                                <big>For Myself</big>
                                <p className="text-muted mt-2">
                                  Write better. Think more clearly. Stay
                                  organized.
                                </p>
                              </div>
                            </div>
                          </Col>
                          <Col md="6" xs="12" sm="12">
                            <div
                              className="cards right_card "
                              onClick={() => setType("group")}
                              style={{
                                border: `2px solid ${
                                  type === "group" ? "#5851d3" : "#ececec"
                                }`,
                              }}
                            >
                              <span>
                                {" "}
                                <FontAwesomeIcon
                                  icon={faUserGroup}
                                  color={`${
                                    type === "group" ? "#5851d3" : "#000"
                                  }`}
                                />
                              </span>
                              <div className="desc_text mt-3">
                                <big>With my team</big>
                                <p className="text-muted mt-2">
                                  Wikis, docs, tasks &amp; projects, all in one
                                  place.
                                </p>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <Button
                        onClick={() => {
                          buttonHandler(currentStep);
                        }}
                        className=" mb-3 w-100 button"
                        type="button"
                      >
                        Create Workspace
                      </Button>
                    </div>
                  </div>
                  <div
                    className={`step-4 d-${
                      currentStep + 1 === 4 ? "block" : "none"
                    }`}
                  >
                    <div className="check_container d-flex justify-content-center mb-3">
                      <span className="check">
                        <FontAwesomeIcon icon={faCheck} color={`${"#fff"}`} />
                      </span>
                    </div>
                    <div className="heading_container text-center">
                      <h3 className="heading">Congratlations, Eren</h3>
                      <span className="sub-heading text-muted">
                        You have accomplished the onboarding, you can start
                        using Eden!
                      </span>
                    </div>
                    <div className="stepForm_container mt-3">
                      <Button
                        onClick={() => {
                          //   buttonHandler(currentStep);
                        }}
                        className=" mb-3 w-100 button"
                        type="button"
                      >
                        launch Eden
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default OnBoardingflow;
