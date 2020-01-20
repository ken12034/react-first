import * as React from "react";
import * as styles from "../scss/index.scss";
import Header from "./Header";
import PostContent from "./container/PostContent";

class App extends React.Component < {}, any > {
  public render() {
    return (
      <div className={styles.main}>
        <PostContent></PostContent>
      </div>
    );
  }
}

export default App;