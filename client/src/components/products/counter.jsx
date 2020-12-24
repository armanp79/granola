import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: 1
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({
      items: this.state.items + 1
    })
  }

  decrement() {
    var newVal = this.state.items - 1 === 0 ? 1 : this.state.items - 1;
    this.setState({
      items: newVal
    })
  }

  render () {
    return (
      <div>
        <button onClick={this.decrement}>
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" focusable="false" style={{display: 'block', fill: 'none', height: '12px', width: '12px', stroke: 'currentcolor', strokeWidth: '5.33333', overflow: 'visible'}}><path d="m2 16h28"></path></svg>
        </button>
        {this.state.items}
        <button onClick={this.increment}>
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" focusable="false" style={{display: 'block', fill: 'none', height: '12px', width: '12px', stroke: 'currentcolor', strokeWidth: '5.33333', overflow: 'visible'}}><path d="m2 16h28m-14-14v28"></path></svg>
        </button>
      </div>
    );
  }
}

export default Counter;

