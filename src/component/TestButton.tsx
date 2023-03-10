import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

interface TestModel {
  id: number;
  name: string;
}

function TestButton() {
  const [test] = useState<TestModel>({ id: 1, name: 'Test' });
  const [msg, setMsg] = useState('Ready');

  useEffect(() => {});

  return (
    <div>
      <p>
        {test.id} - {test.name}
      </p>
      <Button as="a" variant="primary" onClick={() => setMsg('Test Message')}>
        {msg}
      </Button>
    </div>
  );
}

export default TestButton;
