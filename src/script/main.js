import * as React from "react";
import {Flux, Component} from "flumpt";
import {render} from "react-dom";

class MyComponent extends Component {
  componentDidMount() {
    this.dispatch("increment");
    this.dispatch("increment");
  }
  render() {
    return (
      <div>
        {this.props.counter}
        <button onClick={() => this.dispatch("increment")}>increment</button>
      </div>
    );
  }
}

class App extends Flux {
  subscribe() { // `subscribe` is called once in constructor
    this.on("increment", () => {
      this.update(({count}) => {
        return {count: count + 1}; // return next state
      });
    });
  }
  render(state) {
    return <MyComponent {...state}/>;
  }
}

// Setup renderer
const app = new App({
  renderer: el => {
    render(el, document.querySelector("#root"));
  },
  initialState: {count: 0},
  middlewares: [
    // logger
    //   it may get state before unwrap promise
    (state) => {
      console.log(state);
      return state
    }
  ]
});

app.on(":start-updating", () => {
  // overlay ui lock
});
app.on(":end-updating", () => {
  // hide ui lock
});

app.update(_initialState => ({count: 1}))
