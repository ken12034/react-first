import * as React from "react";

import * as styles from "../../scss/container/child.scss";

interface ComputeProps {

}

interface ComputeState {

}

class Child extends React.Component < ComputeProps, ComputeState > {
  public constructor(props : any) {
    super(props);
  }

  public componentDidMount(): void {
    console.log("child componentDidMount");
  }

  public componentWillUnmount(): void {
    console.log("child componentWillUnmount");
  }

  public render() {
    console.log("child render");

    return (
      <h2 className={styles.name}>
        ASUS
      </h2>
    );
  }
}

export default Child;