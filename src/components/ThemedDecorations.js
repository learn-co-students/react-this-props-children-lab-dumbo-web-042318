// Code ThemedDecoration Component Here
import React from "react" 

class ThemedDecoration extends React.Component {
  render() {

    const childrenWithExtraProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {className: this.props.theme, another: "thing"})
      // Children automatically handles mapping with new keys assigned
    });

    return (
      <div> 
        {childrenWithExtraProp}
      </div>
    )
  }
}

export default ThemedDecoration 
