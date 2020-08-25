import React from "react";
import { connect } from "react-redux";
import { size } from "../actions/size";

function ScreenSize({size}) {
  return (
    <div className="control">
      <button className="random" onClick={() => size('small')}>
        small
      </button>
      <button className="random" onClick={() => size('medium')}>
        medium
      </button>
      <button className="random" onClick={() => size('large')}>
        large
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
    return null
  };
  
  export default connect(mapStateToProps, { size})(ScreenSize);
