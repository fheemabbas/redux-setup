import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { geData } from "./Components/Action/Main";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

function App(props) {
  useEffect(() => {
    props.geData();
    // eslint-disable-next-line
  }, []);
  console.log("props :", props);
  return (
    <>
      <div className="App">hello World</div>
      <Switch>
        {/* <Route path="/latest" exact render={(props) => <Latest />} />
        <Route path="/upcoming" exact render={(props) => <Upcomimg />} />
        <Route path="/now-playing" exact render={(props) => <NowPlaying />} />
        <Route path="/movie/:id" exact render={(props) => <MovieDetail />} />
        <Redirect to="/now-playing" /> */}
      </Switch>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.latest.data,
  };
};
export default connect(mapStateToProps, { geData })(App);
