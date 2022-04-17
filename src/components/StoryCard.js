import Card from 'react-bootstrap/Card';

function StoryCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
        <Card.Header>{props.author}</Card.Header>
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{props.description}</Card.Subtitle>
              <Card.Text>
                {props.body}
              </Card.Text>
            </Card.Body>
    </Card>
  );
}

export default StoryCard;