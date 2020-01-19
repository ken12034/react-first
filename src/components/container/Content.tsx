import * as React from "react";
import * as styles from "../../scss/container/content.scss";
import Child from "./Child";
import { connect } from "react-redux";
import { addArticle, fetchPosts } from "../../actions/index";


interface ComputeProps {
  favoritecolor : string;
  addArticle: any;
  fetchPosts: any;
}

interface ComputeState {
  favcol : string;
  isShowChild: boolean; 
  title: string;
  posts: any[];
}

const mapStateToProps = (state: any) => {
  return { 
    articles: state.articles,
    posts: state.posts
  };
};

function mapDispatchToProps(dispatch: any) {
  return {
    addArticle: (article: any) => dispatch(addArticle(article)),
    fetchPosts: (res: any) => dispatch(fetchPosts())
  };
}

class ConnectedContnent extends React.Component < ComputeProps, ComputeState > {
  state = {
    favcol: "red",
    isShowChild: true,
    title: "",
    posts: [""],
  }
  
  public constructor(props : any) {
    super(props);
    // this.state = {
    //   favcol: "red" 
    // };
  }

  
  //The getDerivedStateFromProps method is called right before the render method
  static getDerivedStateFromProps(props : any, state : any) {
    return {
      title: props.articles,
      posts: props.posts,
    };
  }

  //The componentDidMount() method is called after the component is rendered
  public componentDidMount(): void {
    // call ajax api
    console.log("componentDidMount");
    // setTimeout(() => {
    //   this.setState({
    //     favcol: "blue",
    //   })
    // }, 1000)

    this.props.addArticle({
      title: "123"
    });
    this.props.fetchPosts();
  }

  public shouldComponentUpdate(nextProps: ComputeProps, nextState: ComputeState): boolean {
    return true;
  }

  // public getSnapshotBeforeUpdate(prevProps: ComputeProps, prevState: ComputeState): void {
  //   document.getElementById("div1").innerHTML =
  //   "Before the update, the favorite was " + prevState.favcol;
  // }
  // public componentDidUpdate(): void {
  //   document.getElementById("div2").innerHTML =
  //   "The updated favorite is " + this.state.favcol;
  // }

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

  public handleChange = (event: any): void => {
    event.preventDefault();
    // const { title } = this.state;
    this.props.addArticle({ title: event.target.value });
    // this.setState({ title: event.target.value });
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
          <p>{this.state.title}</p>
          <input 
            type="text"
            name=""
            id=""
            value={this.state.title}
            onChange={this.handleChange}
 
          />
        </div>

        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}


// const Contnent = connect(mapStateToProps)(ConnectedContnent);
// const Contnent = connect(mapStateToProps, mapDispatchToProps)(ConnectedContnent);
const Contnent = connect(mapStateToProps, mapDispatchToProps)(ConnectedContnent);
export default Contnent;