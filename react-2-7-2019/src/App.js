import React, { Component } from 'react';
import Test from './Test';
import { Container, Row, Col, Button, ButtonToolbar } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs={12} md={8}>
              <ButtonToolbar>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="success">Success</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="info">Info</Button>
                <Button variant="light">Light</Button>
                <Button variant="dark">Dark</Button>
                <Button variant="link">Link</Button>
              </ButtonToolbar>
            </Col>
            <Col xs={12} md={4}>
              This is second container
            </Col>
          </Row>
        </Container>
       {/* <div>
         <Test />
       </div> */}
      </div>

    );
  }
}

export default App;
