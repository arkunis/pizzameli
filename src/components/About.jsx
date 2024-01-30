import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <>
    <Container style={{marginTop:'50px'}}>
    <h1>Qui sommes nous</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque in dolorem vel natus culpa, odio ab esse distinctio labore impedit, rem atque modi. Hic, rerum est. Consequuntur rem voluptas itaque?</p>
    <h1>Notre spé</h1>
    <Row>
        <Col md={6}>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, amet. Recusandae adipisci natus non nesciunt consequatur minus error officia et corrupti aperiam mollitia, delectus molestiae dignissimos cum, architecto odio laborum?</p>
        </Col>
        <Col md={6}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nesciunt, sed maiores delectus illo nostrum voluptatum nihil animi totam deserunt repellendus. Quo a ducimus cum odit excepturi hic laudantium dolore.</p>
        </Col>
        <Col md={6}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe rem dolore minus corporis consequatur hic, repellendus veritatis quaerat. Nesciunt alias aliquid expedita aspernatur tenetur. Exercitationem libero eius quisquam sequi ut.</p>
        </Col>
    </Row>
    </Container>
    </>
  )
}

export default About