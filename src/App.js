import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { geData } from "./Components/Action/Main";

function App(props) {
  useEffect(() => {
    props.geData();
    // eslint-disable-next-line
  }, []);
  console.log("props :", props);
  return <div className="App">hello World</div>;
}

const mapStateToProps = (state) => {
  return {
    data: state.latest.data,
  };
};
export default connect(mapStateToProps, { geData })(App);
