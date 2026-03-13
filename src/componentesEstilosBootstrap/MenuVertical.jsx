 import { Container, Navbar, Nav } from "react-bootstrap"
 function MenuVertical(){
    return(
        <Container>
            <Navbar bg="danger" className="flex-column  vh-100 p-2">
                <Navbar.Brand>
                    Menu
                </Navbar.Brand>
                <Nav className="flex-column  size:10px">

                    <Nav.Link>Inicio</Nav.Link>
                    <Nav.Link>InicioRB</Nav.Link>
                    <Nav.Link>Card</Nav.Link>
                    <Nav.Link>CardRB</Nav.Link>
                    
                </Nav>
            </Navbar>

        </Container>

    )

}
export default MenuVertical

