import React, { Component } from "react";
import { observer, inject } from "mobx-react";

import { IMobxStore } from "./stores/mobxStore";
import "./App.css";

interface AppProps {
  mobxStore?: IMobxStore;
}

@inject(function(stores: any) {
  return {
    name: stores.mobxStore.name,
    greeting: stores.mobxStore.greeting,
    setName: stores.mobxStore.setName
  };
})
@observer
class App extends Component<any> {
  clickHandler = () => {
    const { setName } = this.props;
    setName("Bobs");
  };
  render() {
    const { greeting, name } = this.props;
    console.log("name: ", name);

    return (
      <div className="App">
        <header className="App-header">
          {name}
          <button onClick={this.clickHandler}>Change Greeting</button>
        </header>
      </div>
    );
  }
}

export default App;
