import { Container, Row, Col } from "react-bootstrap";

const FooterComponent = () => {
  return (
    <footer>
      <Container fluid style={{marginTop:"200px"}}>
        <Row>
          <Col className="bg-dark text-white text-center py-5">
            Copyright &copy; Royal-Purchase
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
