import * as React from 'react'; // eslint-disable-line no-unused-vars
import {Component} from 'flumpt';

class MyComponent extends Component {
  componentDidMount() {
    this.dispatch('increment');
  }

  render() {
    return (
      <div>
        {this.props.count}
        <button onClick={() => this.dispatch('increment')}>increment</button>
      </div>
    );
  }
}

export default MyComponent;
