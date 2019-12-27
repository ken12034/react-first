import * as React from "react";
import styles from "../scss/index.scss";


class App extends React.Component<{}, undefined> {
    public render() {
        
        return (
            <div className={styles.main}>
                <h1>Hello World!</h1>
                <p>Foo to the barz</p>
                
            </div>
        );
    }
}


export default App;