import React, { Component } from "react";
import ApplyButton from "../layout/ApplyButton";
import { connect } from "react-redux";

class Homepage extends Component {
  render() {
    const { auth } = this.props;
    const applyBtn = auth.uid ? <ApplyButton /> : null;
    const title = auth.uid ? <h1>Welcome {this.props.profile.firstname}!</h1> : <h1>Please Sign In to Apply for Jobs</h1>
    return (
      <div
        className="job-list container"
        style={{ marginTop: "2em", height: "100%", paddingBottom: "8em" }}
      >
        <h1>{title}</h1>
        <div className="card z-depth-0 job-description">
          <div className="card-content grey-text text-darken-3">
            <span className="card-title">Company 1 Sdn. Bhd.</span>
            <p style={{ fontSize: "1.3em" }}>Junior Software Engineer</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugit alias odio perspiciatis blanditiis at eum esse consequuntur, error accusantium expedita quidem architecto mollitia ad incidunt. Repellat dolor ipsam nemo.</p>
            <p className="grey-text">Posted on 3rd October, 2pm</p>
            {applyBtn}
          </div>
        </div>

        <div className="card z-depth-0 job-description">
          <div className="card-content grey-text text-darken-3">
            <span className="card-title">Company 2 Sdn. Bhd.</span>
            <p style={{ fontSize: "1.3em" }}>Front Office Assistant</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugit alias odio perspiciatis blanditiis at eum esse consequuntur, error accusantium expedita quidem architecto mollitia ad incidunt. Repellat dolor ipsam nemo.</p>
            <p className="grey-text">Posted on 9th October, 1pm</p>
            {applyBtn}
          </div>
        </div>

        <div className="card z-depth-0 job-description">
          <div className="card-content grey-text text-darken-3">
            <span className="card-title">Company 3 Sdn. Bhd.</span>
            <p style={{ fontSize: "1.3em" }}>Project Engineer</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugit alias odio perspiciatis blanditiis at eum esse consequuntur, error accusantium expedita quidem architecto mollitia ad incidunt. Repellat dolor ipsam nemo.</p>
            <p className="grey-text">Posted on 21rd October, 10am</p>
            {applyBtn}
          </div>
        </div>

        <div className="card z-depth-0 job-description">
          <div className="card-content grey-text text-darken-3">
            <span className="card-title">Company 4 Sdn. Bhd.</span>
            <p style={{ fontSize: "1.3em" }}>Senior Web Developer</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugit alias odio perspiciatis blanditiis at eum esse consequuntur, error accusantium expedita quidem architecto mollitia ad incidunt. Repellat dolor ipsam nemo.</p>
            <p className="grey-text">Posted on 14th October, 11am</p>
            {applyBtn}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Homepage);
