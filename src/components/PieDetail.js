import React from "react";
import PropTypes from "prop-types";

function PieDetail(props){
  const { pie, onClickingBuy } = props;

  return (
    <React.Fragment>
      <h1>Pie Details</h1>
      <h3>{pie.name}</h3> 
      <h4>{pie.flavor}</h4>
      <p><em>{pie.price}</em></p>
      <button onClick = {() => onClickingBuy(pie.id)}>Buy Pie!</button>
    </React.Fragment>
  )
}

PieDetail.propTypes = {
  pie: PropTypes.object,
  onClickingBuy: PropTypes.func
}
export default PieDetail;
