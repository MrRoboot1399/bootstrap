import { Card, Button, Container } from 'react-bootstrap';

function CardRB() {
  return (
    <Container>
      <Card style={{ width: "300px" }}>
        <Card.Img  variant="top" src="https://img.freepik.com/vector-premium/ilustracion-vector-lindo-sol-nube_175152-492.jpg?semt=ais_hybrid&w=740&q=80"></Card.Img>
        
        <Card.Body>
          <Card.Title>Mi Tarjeta</Card.Title>
          <Card.Text>
            Esto es un ejemplo de texto dentro de la tarjeta.
          </Card.Text>
          <Button variant="dark">Acción</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CardRB;