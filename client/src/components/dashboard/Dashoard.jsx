import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions";
import ClientsList from "./ClientsList";

class Dashboard extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div>
        <div className="container">
          <div className="row mt-3 mb-3">
            <h4 className="mr-auto mt-auto mb-auto">
              {user.name.split(" ")[0]}
              &nbsp;<b>أهلا بك</b>
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large btn-dark waves-effect waves-light hoverable blue accent-3 mt-auto mb-auto"
            >
              تسجيل خروج
            </button>
          </div>
        </div>
        <ClientsList></ClientsList>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
