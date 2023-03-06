import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Stack, Button, Container, Row, Col } from 'react-bootstrap';
import TestButton from '../component/TestButton';
import './App.css';

function AppHome() {
  return (
    <Container>
      <Row>
        <h1> Tittle </h1>
      </Row>
      <Row>
        <Col>
          <Stack direction="horizontal" gap={2}>
            <TestButton />
            <Button as="a" variant="success">
              Button as link
            </Button>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppHome />} />
      </Routes>
    </Router>
  );
}
