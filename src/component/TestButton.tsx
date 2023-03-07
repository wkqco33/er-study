import React from 'react';
import Button from 'react-bootstrap/Button';

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
}

export default TestButton;
