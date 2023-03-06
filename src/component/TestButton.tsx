import React from 'react';
import Button from 'react-bootstrap/Button';

// eslint-disable-next-line react/prefer-stateless-function
class TestButton extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Button as="a" variant="primary">
        Test Button
      </Button>
    );
  }
}

export default TestButton;
