import React from 'react';

// reactstrap components
import { Button, Card, CardHeader, CardBody, CardFooter, CardText, FormGroup, Form, Input, Row, Col } from 'reactstrap';

class UserProfile extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h5 className="title">Edit Profile</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>Department</label>
                          <Input defaultValue="DCG" disabled placeholder="Company" type="text" />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="3">
                        <FormGroup>
                          <label>Username</label>
                          <Input disabled defaultValue="whatley" placeholder="Username" type="text" />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="4">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">Email address</label>
                          <Input disabled placeholder="whatley@lenovo.com" type="email" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>First Name</label>
                          <Input defaultValue="Wesley" placeholder="Company" type="text" />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="6">
                        <FormGroup>
                          <label>Last Name</label>
                          <Input defaultValue="Hatley" placeholder="Last Name" type="text" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Address</label>
                          <Input defaultValue="320 Callandale Ln" placeholder="Home Address" type="text" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="4">
                        <FormGroup>
                          <label>City</label>
                          <Input defaultValue="Durham" placeholder="City" type="text" />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="4">
                        <FormGroup>
                          <label>State</label>
                          <Input defaultValue="NC" placeholder="State" type="text" />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="4">
                        <FormGroup>
                          <label>Postal Code</label>
                          <Input defaultValue="27703" placeholder="ZIP Code" type="number" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <label>Lenovo Address</label>
                          <Input
                            cols="80"
                            disabled
                            defaultValue="8001 Development Drive, Morrisville, NC 27560 B8-2F-2W-H336"
                            placeholder="This should be your work address, floor and (if applicable) desk assignment"
                            rows="1"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="4">
                        <FormGroup>
                          <label>Role</label>
                          <Input disabled defaultValue="Senior Software Engineer" placeholder="Title" type="text" />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="2">
                        <FormGroup>
                          <label>Pay Code</label>
                          <Input disabled defaultValue="8691" placeholder="Pay Code" type="number" />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button className="btn-fill" color="primary" type="submit">
                    Save
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-user">
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img alt="..." className="avatar" src={require('assets/img/Headshot.jpg')} />
                      <h5 className="title">Wesley Hatley</h5>
                    </a>
                    <p className="description">Senior Software Engineer at Lenovo</p>
                  </div>
                  <div className="card-description">
                    Wesley Hatley was interviewed and hired by Wesley Lathan on May 1st of 2019 as a Senior Software
                    Engineer. He prefers the moniker Wes, or when Wes Lathan is present he goes by "The Other Wes."
                    Wesley is a full stack MERN engineer, specializing predominantly in back-end, Nodejs architecture,
                    but more than comfortable with front-end development as well.
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="button-container">
                    <Button className="btn-icon btn-round" color="facebook">
                      <i className="fab fa-facebook" href="https://www.facebook.com/wes.hatley" />
                    </Button>
                    <Button className="btn-icon btn-round" color="github">
                      <i className="fab fa-github" href="https://github.com/parallelam" />
                    </Button>
                    <Button className="btn-icon btn-round" color="linkedin">
                      <i className="fab fa-linkedin" href="https://www.linkedin.com/in/wesley-hatley/" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default UserProfile;
