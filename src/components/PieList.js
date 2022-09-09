import React from "react";
import Pie from "./Pie";
import PropTypes from "prop-types";

function PieList(props){
  return(
    <React.Fragment>
      {props.pieList.map((pie) =>
        <Pie
          whenPieClicked={ props.onPieSelection }
          name={ pie.name }
          flavor={ pie.flavor}
          price={ pie.price }
          quantity={ pie.quantity }
          id= { pie.id }
          key= { pie.id} />
      )}
    </React.Fragment>
  )
}

PieList.propTypes = {
  pieList: PropTypes.array,
  onPieSelection: PropTypes.func
};

export default PieList;