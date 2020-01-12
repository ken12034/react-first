import * as React from "react";


interface ComputeProps {

}

interface ComputeState {

}

class Child extends React.Component < ComputeProps, ComputeState > {
  state = {
    favcol: "red",
  }
  public constructor(props : any) {
    super(props);
  }

  public componentWillUnmount(): void {
    console.log("The component named Header is about to be unmounted.");
  }

  public render() {

    return (
      <h2>
        ASUS
      </h2>
    );
  }
}

export default Child;