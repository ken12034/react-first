import React, { Component } from "react";
import {connect} from "react-redux";


class HeaderConnect extends Component {
  constructor() {
    super();
    this.state = {
      test: "2331231123",
      list: null
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){
    console.log("!31231231");
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    let message = this.props.data.map((item)=>{
      return <li key={item.id}>{item.name}</li>
     })
    return (
      <div>
        {message}
      </div>
    );
  }
}



const mapStateToProps = state => {
  return { data: state }       
}

const Header = connect(mapStateToProps)(HeaderConnect);


export default Header;