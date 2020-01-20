import * as React from "react";

interface ComputeProps {

}

interface ComputeState {

}


class Example extends React.Component < ComputeProps, ComputeState > {
  state = {

  }
  
  public constructor(props : any) {
    super(props);
    console.log("constructor");
  }
 
  //The getDerivedStateFromProps method is called right before the render method
  static getDerivedStateFromProps(nextProps : any, prevState : any) {
    console.log("getDerivedStateFromProps");
    return "getDerivedStateFromProps";
  }

  //The componentDidMount() method is called after the component is rendered
  public componentDidMount(): void {
    // call ajax api
    console.log("componentDidMount");
  }

  public shouldComponentUpdate(nextProps: ComputeProps, nextState: ComputeState): boolean {
    console.log("shouldComponentUpdate");
    return true;
  }

  public getSnapshotBeforeUpdate(prevProps: ComputeProps, prevState: ComputeState): any {
    console.log("getSnapshotBeforeUpdate");

    console.log(prevProps);

    console.log(prevState);

    return "getSnapshotBeforeUpdate";
  }
  public componentDidUpdate(prevProps: any, prevState: any, snapshot: any): void {
    // update final

    console.log("componentDidUpdate");

    console.log(prevProps);

    console.log(prevState);

    console.log(snapshot);

  }

  public render() {
    console.log("render");

    return (
      <div>
        ASUS Style
      </div>
    );
  }
}


export default Example;

