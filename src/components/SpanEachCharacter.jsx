import React from "react";

class SpanEachCharacter extends React.Component {
  constructor(props) {
    super(props);

    let error;
    let classname;
    let text;

    if (typeof this.props.children == "string") {
      classname = this.props.charsClassName;      
      error = null;
      text = this.props.children;
    } else {
      error = "content must be a plain string";
    }

    this.state = {
      error,
      classname,
      text
    };
  }

  render() {
    if (this.state.error) {
      return (
        <>
          <p style={{color:"red"}}>Error: {this.state.error}</p>
        </>
      );
    }
    return <p>
    {
        Array.prototype.map.call(this.state.text, char => {
            return (<span className={this.state.classname}>{char}</span>)
        })
    }
    </p>;
  }
}

export default SpanEachCharacter;
