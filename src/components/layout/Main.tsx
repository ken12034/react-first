import React, { Component } from "react";
import { Provider } from "react-redux"
import { HeaderStore } from "../../store"

class Main extends Component {
  render() {
    return (
      <Provider store={HeaderStore}>
        
      </Provider>
    )
  }

}