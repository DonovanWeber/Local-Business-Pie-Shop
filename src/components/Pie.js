import React from "react";
import PropTypes from "prop-types"

function Pie(props){
  return(
    <React.Fragment>
      <div onClick = {() => props.whenPieClicked(props.id)}>
        <h3>{props.name}</h3>
        <h4>{props.flavor}</h4>
        <p><em>${props.price}</em></p>
        <p>Amount Left:{props.quantity}</p>
        <hr />
      </div>
    </React.Fragment>
  )
}

Pie.propTypes = {
  name: PropTypes.string.isRequired,
  flavor: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenPieClicked: PropTypes.func
};

export default Pie;