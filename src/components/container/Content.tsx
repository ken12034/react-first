import * as React from "react";
import * as styles from "../../scss/container/content.scss";
import Child from "./Child";
import { connect } from "react-redux";
import { addArticle, fetchPosts } from "../../actions/index";


interface ComputeProps {
  favoritecolor : string;
  posts: any[];
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
    console.log("constructor");
    // this.state = {
    //   favcol: "red" 
    // };
  }

  
  //The getDerivedStateFromProps method is called right before the render method
  static getDerivedStateFromProps(nextProps : any, prevState : any) {
    console.log("getDerivedStateFromProps");
    if (nextProps.articles !== prevState.title) {
      return {
        title: nextProps.articles,
        posts: nextProps.posts,
      };
    }
    return null;
  }



  //The componentDidMount() method is called after the component is rendered
  public componentDidMount(): void {
    // call ajax api
    console.log("componentDidMount");
    this.props.addArticle({
      title: "123"
    });
    this.props.fetchPosts();
  }

  public shouldComponentUpdate(nextProps: ComputeProps, nextState: ComputeState): boolean {
    console.log("shouldComponentUpdate");
    return true;
  }

  // public getSnapshotBeforeUpdate(prevProps: ComputeProps, prevState: ComputeState): void {
  //   document.getElementById("div1").innerHTML =
  //   "Before the update, the favorite was " + prevState.favcol;
  // }
  public componentDidUpdate(prevProps: any, prevState: any): void {
    // document.getElementById("div2").innerHTML =
    // "The updated favorite is " + this.state.favcol;
    console.log(prevProps);

    console.log(prevState);

    console.log(this.state.title);  

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

  public handleChange = (event: any): void => {
    event.preventDefault();
    // const { title } = this.state;
    this.props.addArticle({ title: event.target.value });
    // this.setState({ title: event.target.value });
  }

  public filterPosts = (): any => {
    const { posts }: any = this.props;
    let result: any = [];
    if (Object.keys(posts).length === 0) {
      return null;
    }
    posts.map((post: any)=> {

      result.push(
        <ul key={post.key}>
          <li>{post.title}</li>
          <li>{post.content}</li>
          <li>{post.link}</li>
        </ul>
      );
    })

    return result;
  }


  public showChild(): any {
    if (this.state.isShowChild) {
      return <Child/>;
    }
  }


  public render() {
    console.log("render");

    return (
      <div className={styles.content}>

        {this.showChild()}
        <button type="button" onClick={this.showChildHandler}>Change Child</button>

        <br/>

        {this.filterPosts()}

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