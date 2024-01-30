import React, {useState} from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const Pizza = (props) => {
    const[taille, setTaille] = useState('small');
    const[quantite, setQuantite] = useState(1);
    return (
        <Card style={{ width: "18rem", marginBottom: "2em" }}>
            <Card.Img variant='top' src={props.lapizza.image} width={350} />
            <Card.Body>
                <Card.Title>{props.lapizza.name}</Card.Title>
                <Card.Text>
                    <Row>
                        <Col md={6}>
                            <h6>Taille : <select name="" id="" value={taille} onChange={(e)=>setTaille(e.target.value)}>{props.lapizza.varients.map(taille => (<option value={taille}>{taille}</option>))}</select></h6>
                        </Col>
                        <Col md={6}>
                            <h6>Quantité :<br/> 
                            <select name="" id="" value={quantite} onChange={(e)=>setQuantite(e.target.value)}>{[... Array(10).keys()].map((v,i) =>(
                                <option value={i+1}>{i+1}</option>
                            ))}</select></h6>
                        </Col>
                    </Row>
                </Card.Text>
                <Row>
                    <Col md={6}>
                        Prix: {props.lapizza.prices[0][taille]*quantite}€
                    </Col>
                    <Col md={6}>
                    <Button className="bg-warning text-light">Add</Button>
                    </Col>
                </Row>
                
            </Card.Body>
        </Card>
    )
}

export default Pizza