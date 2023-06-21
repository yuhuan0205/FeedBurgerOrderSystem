import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Navbar from 'react-bootstrap/Navbar';

const backgroundColor = {backgroundColor: 'black', height: "100vh"}

function HomePage() {
  return (
    <div style = {backgroundColor}>
    <Container fluid>
        <Row>
            <Col xs="12" md="4"><Button color="danger" block>Danger</Button></Col>
            <Col xs="12" md="4"><Button color="danger" block>Danger</Button></Col>
            <Col xs="12" md="4"><Button color="danger" block>Danger</Button></Col>
            <Col xs="12" md="4"><Button color="danger" block>Danger</Button></Col>
            <Col xs="12" md="4"><Button color="danger" block>Danger</Button></Col>
            <Col xs="12" md="4"><Button color="danger" block>Danger</Button></Col>
            <Col xs="12" md="4"><Button color="danger" block>Danger</Button></Col>
            <Col xs="12" md="4"><Button color="danger" block>Danger</Button></Col>
        </Row>
    </Container>
    <Navbar fixed="bottom" bg="dark" variant="dark">
        <Navbar.Brand>Footer</Navbar.Brand>
    </Navbar>
    </div>
  );
}

export default HomePage;
