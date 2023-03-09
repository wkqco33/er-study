import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function TestButton() {
  const [msg, setMsg] = useState('');

  return (
    <Button as="a" variant="primary" onClick={() => setMsg('Test Message')}>
      {msg.length === 0 ? `Test Button` : `${msg}`}
    </Button>
  );
}

export default TestButton;
