import React from "react";
import PropTypes from "prop-types";

function PieDetail(props){
  const { pie, onClickingBuy } = props;
  return (
    <React.Fragment>
      <h1>Pie Details</h1>
      <h3>Pie Name: {pie.name}</h3> 
      <h4>Flavor Profile: {pie.flavor}</h4>
      <p><em>${pie.price}</em></p>
      <p>Quantity:{pie.quantity}</p>
      <button onClick = {() => onClickingBuy(pie.id)}>Buy Pie!</button>
    </React.Fragment>
  )
}

PieDetail.propTypes = {
  pie: PropTypes.object
}
export default PieDetail;
