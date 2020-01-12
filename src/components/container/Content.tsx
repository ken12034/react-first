import * as React from "react";
import * as styles from "../../scss/container/content.scss";
import { string } from "prop-types";

interface ComputeProps {
    favoritecolor: string;
}

interface ComputeState {
    favcol: string;
}

class Contnent extends React.Component<ComputeProps, ComputeState> {
    public constructor(props: any) {
        super(props);
        this.state = {favcol: "red"};
    }

    static getDerivedStateFromProps(props: any, state: any) {
        return {favcol: props.favoritecolor };
    }
    public render() {
        
        return (
            <div className={styles.content}>
                {this.state.favcol}
            </div>
        );
    }
}





export default Contnent;