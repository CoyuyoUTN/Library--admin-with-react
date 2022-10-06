import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const BookCard = ({ book }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={book.imageLink} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>{book.description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
