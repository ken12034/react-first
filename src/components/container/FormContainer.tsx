import * as React from "react";
import * as ReactDOM from "react-dom";
import Input from "../presentational/Input";
import Header from "../layout/Header";

import {Provider} from "react-redux";
import {connect} from "react-redux";
import {HeaderStore} from "../../store/index";



class FormContainer extends React.Component<ComputeProps, Object> {
  constructor(prop) {
    super(prop);
    this.state = {
      seo_title: "",
      test: "23123",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    const seo_title =this.state.seo_title;
    const test  = this.state.test;
    return (
      <form id="article-form">
        <Provider store={HeaderStore}>
          <Header></Header>
        </Provider>
        <Input
          text="SEO title"
          label="seo_title"
          type="text"
          id="seo_title"
          value={seo_title}
          handleChange={this.handleChange}
        />
        <p>
          {test}
        </p>
      </form>
    );
  }
}



// const mapStateToProps = state => {
//   return { data: state.message }       
// }

// const HeaderContent = connect(mapStateToProps)(Header);


export default FormContainer;