import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Dashboard(){
    return(
        <>
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Encode</Navbar.Brand>
          <Nav className="d-flex">
            <Nav.Link href="/dashboard/books/:bookId">Book</Nav.Link>
            <Nav.Link href="/dashboard/books">Books List</Nav.Link>
            <Nav.Link href="/logout">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}

export default Dashboard