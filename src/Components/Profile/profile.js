import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { userAction } from "../../actions/index";
import Info from "../Info/info";
import Repo from "../Repo/Repo";
import Filter from "../Filter/Filter";
import Error from "../Error/Error";
import "./profile.css";

// Profile component
class Profile extends Component {
  componentDidMount() {
    this.props.onProfileMount(false);
  }
  render() {
    //Redirecting to the homepage if the user object is empty
    return Object.keys(this.props.user).length === 0 ? (
      <Redirect to="/" />
    ) : (
      <>
        {this.props.userDoesntExist && <Error />}
        <div id="profile">
          <Info />
          <div className="search-repo">
            <Filter />
            <Repo />
          </div>
        </div>
      </>
    );
  }
}

// passing redux state as props to the component
const mapStateToProps = userAction;

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(Profile)
);