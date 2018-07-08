// Code Invitation Component Here
// In the components/Invitation.js file, create an Invitation React component.
// This component renders out an h1 with the text 'You've been invited!'
// After this h1, render out any children that are passed into the Invitation component. This allows us to customize the message.
//
import React from "react" 

class Invitation extends React.Component {
  render() {
    return (
      <div> 
        <h1>You've been invited!</h1>
        <h2>{this.props.children}</h2>

      </div>
    )
  }
}

export default Invitation 
