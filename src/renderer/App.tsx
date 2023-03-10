import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Stack, Container, Row, Col } from 'react-bootstrap';
import TestButton from '../component/TestButton';
import './App.css';

function AppHome() {
  return (
    <Container>
      <Row>
        <h1> Title </h1>
      </Row>
      <Row>
        <Col>
          <Stack direction="horizontal" gap={2}>
            <TestButton />
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
