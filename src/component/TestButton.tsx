import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

<<<<<<< HEAD
function TestButton() {
  const [msg, setMsg] = useState('');

  return (
    <Button as="a" variant="primary" onClick={() => setMsg('Test Message')}>
      {msg.length === 0 ? `Test Button` : `${msg}`}
    </Button>
  );
=======
class TestButton extends React.Component {
  constructor(props: { name: any } | Readonly<{ name: any }>) {
    super(props);
    this.testClick = this.testClick.bind(this);
  }

  testClick() {
    console.log('Test Button Clicked');
  }

  render() {
    return (
      <Button as="a" variant="primary" onClick={this.testClick}>
        {this.props.name}
      </Button>
    );
  }
>>>>>>> ff95f2e904b36ced194d236f0b23e153eef3acb3
}

export default TestButton;
