import * as React from "react";
import * as styles from "../scss/index.scss";
import Header from "./Header";
import Content from "./container/Content";

class App extends React.Component<{}, any> {
    public render() {
        
        return (
            <div className={styles.main}>
                <Header></Header>
                <Content favoritecolor="yellow"></Content>
            </div>
        );
    }
}


export default App;