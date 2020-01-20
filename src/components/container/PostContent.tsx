import * as React from "react";
import * as styles from "../../scss/container/content.scss";
import Child from "./Child";
import { connect } from "react-redux";
import { addArticle, fetchPosts } from "../../actions/index";


interface ComputeProps {
  articles: string;
  posts: any[];
  addArticle: any;
  fetchPosts: any;
}

interface ComputeState {
  favcol : string;
  isShowChild: boolean; 
  title: string;
  posts: any;
}

// set props to state
const mapStateToProps = (state: any) => {
  return { 
    articles: state.articles,
    posts: state.posts
  };
};

// function mapDispatchToProps(dispatch: any) {
//   return {
//     addArticle: (article: any) => dispatch(addArticle(article)),
//     fetchPosts: (res: any) => dispatch(fetchPosts())
//   };
// }

class ConnectedPostContnent extends React.Component < ComputeProps, ComputeState > {
  state = {
    favcol: "red",
    isShowChild: true,
    title: "",
    posts: [{}],
  }
  
  public constructor(props : any) {
    super(props);
    console.log("post constructor");
  }

  
  //The getDerivedStateFromProps method is called right before the render method
  static getDerivedStateFromProps(nextProps : any, prevState : any) {
    console.log("post getDerivedStateFromProps");
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
    console.log("post componentDidMount");
    this.props.addArticle({
      title: "123"
    });
    this.props.fetchPosts();
  }

  public shouldComponentUpdate(nextProps: ComputeProps, nextState: ComputeState): boolean {
    console.log("post shouldComponentUpdate");
    return true;
  }

  public getSnapshotBeforeUpdate(prevProps: ComputeProps, prevState: ComputeState): any {
    // before render
    console.log("post getSnapshotBeforeUpdate");

    if (this.props.articles > prevProps.articles ) {
      return this.props.articles;
    }

    return "getSnapshotBeforeUpdate";
  }
  public componentDidUpdate(prevProps: any, prevState: any, snapshot: any): void {

    console.log("post componentDidUpdate");

    console.log("post componentDidUpdate => " + snapshot);

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
    this.props.addArticle({ title: event.target.value });
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
    console.log("post render");

    return (
      <div className={styles.content}>
        
        <div className={styles.child}>
          {this.showChild()}
          <button type="button" onClick={this.showChildHandler}>Change Child</button>
        </div>
        
        

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
      </div>
    );
  }
}


// const PostContent = connect(mapStateToProps)(ConnectedPostContnent);
// const PostContent = connect(mapStateToProps, mapDispatchToProps)(ConnectedPostContnent);
const PostContent = connect(mapStateToProps, {addArticle, fetchPosts})(ConnectedPostContnent);
export default PostContent;