import { Card, Button } from "react-bootstrap";

{/*Display information about each study space */}
function SpaceCard({cardImage,cardName, cardCampus, cardCapacity}) {
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={cardImage} className="img-fluid" />
            <Card.Body>
                <Card.Title>{cardName}</Card.Title>
                <Card.Text>{cardCampus}</Card.Text>
                <Card.Text>Capacity: {cardCapacity}
                </Card.Text>
                
                <Button variant="primary">Book Space</Button>
            </Card.Body>
        </Card>
    );
}

export default SpaceCard;