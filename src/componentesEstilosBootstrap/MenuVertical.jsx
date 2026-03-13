 import { Container, Navbar, Nav } from "react-bootstrap"
 function MenuVertical(){
    return(
        <Container>
            <Navbar bg="dark" className="flex-column  vh-100 p-2">
                <Navbar.Brand>
                    Menu
                </Navbar.Brand>
                <Nav className="flex-column size: 50px">

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

