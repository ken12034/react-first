import * as React from "react";
import * as styles from "../../scss/container/content.scss";
import Child from "./Child";

interface ComputeProps {
  favoritecolor : string;
}

interface ComputeState {
  favcol : string;
  isShowChild: boolean; 
}

class Contnent extends React.Component < ComputeProps, ComputeState > {
  state = {
    favcol: "red",
    isShowChild: true,
  }
  public constructor(props : any) {
    super(props);
    // this.state = {
    //   favcol: "red" 
    // };
  }

  
  //The getDerivedStateFromProps method is called right before the render method
  // static getDerivedStateFromProps(props : any, state : any) {
  //   return {favcol: props.favoritecolor};
  // }

  //The componentDidMount() method is called after the component is rendered
  public componentDidMount(): void {
    console.log("componentDidMount");
    setTimeout(() => {
      this.setState({favcol: "blue"})
    }, 1000)
  }

  public shouldComponentUpdate(): boolean {
    return true;
  }

  public getSnapshotBeforeUpdate(prevProps: ComputeProps, prevState: ComputeState): void {
    document.getElementById("div1").innerHTML =
    "Before the update, the favorite was " + prevState.favcol;
  }
  public componentDidUpdate(): void {
    document.getElementById("div2").innerHTML =
    "The updated favorite is " + this.state.favcol;
  }

  public changeColor = ():void => {
    this.setState({
      favcol: "yellow",
    });
  }

  public showChildHandler = ():void => {
    this.setState({
      isShowChild: !this.state.isShowChild,
    });
  }

  public render() {
    let childComponent;

    if (this.state.isShowChild) {
      childComponent = <Child/>;
    }

    return (
      <div className={styles.content}>
        {childComponent}
        <button type="button" onClick={this.showChildHandler}>Change Child</button>

        <br/>

        <div className={styles.colorContent}>

          <p>{this.state.favcol}</p>
          <button type="button" onClick={this.changeColor}>Change color</button>
        
        </div>

        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}

export default Contnent;