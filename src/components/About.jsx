import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/useContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent component");
  }

  componentDidMount() {
    console.log("parent did mount");
  }

  render() {
    console.log("parent render");
    return (
      <div>
        <h2>About</h2>
        {/* <User /> */}
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({loggedInUser}) =>
               <h1 className="text-xl font-bold">{loggedInUser}</h1>
            }
          </UserContext.Consumer>
        </div>
        <UserClass name={'1st child ("class")'} location="Kolkata" />
        {/* <UserClass name={'2nd child ("class")'} location="USA" /> */}
      </div>
    );
  }
}

export default About;
/*
 - parent constructor will call
 - parent render will call

 -1st child constructor will call
 -1st child render will call

  <DOM UPDETED - IN SINGLE BATCH>

 -1st child didmount will call
 -1st child didmount will call

 - parent didmount will call

*/
